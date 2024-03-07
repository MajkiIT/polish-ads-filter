/*!
 * Sliding-Scroll
 *
 * Copyright (c) 2022 Robbendebiene
 * Licensed under MIT (https://github.com/Robbendebiene/Sliding-Scroll)
 */
const pi = Math.PI;
const halfPi = Math.PI/2;

/*
 * Some predefined easing functions (curves).
 * These can be used to change the scrolling rate of the scroll animation.
 * It is expected that the x value lies in the range between 0 and 1.
 * Every function will calculate and return a corresponding y value in the same range
 * with the exception that it might exceed or deceed for intermediate x values.
*/
const EASING_FUNCTIONS = {
  // linear: x
  // https://www.wolframalpha.com/input?i=y+%3D+x+for+x%3E%3D0%2C+x+%3C%3D+1
  linear: (x) => x,
  // fast in - slow out: sin((pi/2) * x)
  // https://www.wolframalpha.com/input?i=y+%3D+sin%28%28pi%2F2%29*x%29+for+x%3E%3D0%2C+x+%3C%3D+1
  fastInSlowOut: (x) => Math.sin(halfPi * x),
  // slow in - fast out: cos((pi/2)*x +pi ) + 1
  // https://www.wolframalpha.com/input?i=y+%3D+cos%28%28pi%2F2%29*x+%2Bpi+%29+%2B+1+for+x%3E%3D0%2C+x+%3C%3D+1
  slowInFastOut: (x) => Math.cos(halfPi * x + pi) + 1,
  // slow in - slow out: 1/2 * (cos((x * pi) + pi) + 1)
  // https://www.wolframalpha.com/input?i=y+%3D+1%2F2+*+%28cos%28%28x+*+pi%29+%2B+pi%29+%2B+1%29+for+x%3E%3D0%2C+x+%3C%3D+1
  slowInSlowOut: (x) => 0.5 * (Math.cos((x * pi) + pi) + 1)
}


/*
 * Scroll smoothly over time to a given absolute scroll position defined by the top and left properties.
 * If the top or left scroll position is omitted it will fallback to the current scroll position
 * duration: scroll duration in milliseconds; defaults to 0 (no transition)
 * element: the html element that should be scrolled; defaults to the main scrolling element
 * easingFunction: defines the scrolling rate over time; defaults to ease in and out sin.
 * You can either use one of the predefined functions from EASING_FUNCTIONS or a custom one.
 */
function smoothScrollTo({
  top,
  left,
  duration = 0,
  element = document.scrollingElement,
  easingFunction = EASING_FUNCTIONS.slowInSlowOut
}) {
  // save starting scroll positions
  const startTop = element.scrollTop, startLeft = element.scrollLeft;
  // if unset assign current position so scrolling has no affect for this axis
  top ??= startTop;
  left ??= startLeft;
  // clamp top position between 0 and max scroll position
  top = Math.max(0, Math.min(element.scrollHeight - element.clientHeight, top));
  left = Math.max(0, Math.min(element.scrollWidth - element.clientWidth, left));
  // cancel if already on target position
  if (startTop === top && startLeft === left) return;
  // calculate scroll distance for each axis
  const distanceTop = top - startTop, distanceLeft = left - startLeft;

  let x = 0, prevTimestamp = null;

  function step (newTimestamp) {
    // if duration is 0 x will be Infinity
    x += (newTimestamp - prevTimestamp) / duration;
    // clamp x to 1
    x = Math.min(x, 1);
    // calculate proportional fraction based on given easing function
    const fraction = easingFunction(x);
    // jump to scroll position
    element.scroll({
      top: startTop + fraction * distanceTop,
      left: startLeft + fraction * distanceLeft,
      behavior: 'instant'
    });
    // exit function when finished
    if (x >= 1) return;
    // restart function again on next frame
    prevTimestamp = newTimestamp;
    window.requestAnimationFrame(step);
  }
  // use first frame to initialize the timestamp
  window.requestAnimationFrame((timestamp) => {
    prevTimestamp = timestamp;
    window.requestAnimationFrame(step);
  });
}


/*
 * Convenience function to scroll to the top of the main page.
 * duration: scroll duration in milliseconds; defaults to 0 (no transition)
 * easingFunction: defines the scrolling rate over time; defaults to ease in and out sin.
 * You can either use one of the predefined functions from EASING_FUNCTIONS or a custom one.
 */
function smoothScrollToTop({ duration, easingFunction } = {}) {
  smoothScrollTo({
    top: 0,
    duration: duration,
    easingFunction: easingFunction
  });
}


/*
 * Convenience function to scroll to the bottom of the main page.
 * duration: scroll duration in milliseconds; defaults to 0 (no transition)
 * easingFunction: defines the scrolling rate over time; defaults to ease in and out sin.
 * You can either use one of the predefined functions from EASING_FUNCTIONS or a custom one.
 */
function smoothScrollToBottom({ duration, easingFunction } = {}) {
  const scrollableElement = document.scrollingElement;
  smoothScrollTo({
    top: scrollableElement.scrollHeight - scrollableElement.clientHeight,
    duration: duration,
    easingFunction: easingFunction
  });
}


/*
 * Convenience function to scroll to an element in the main page.
 * element: the reference to the HTML element that should be scrolled to
 * duration: scroll duration in milliseconds; defaults to 0 (no transition)
 * easingFunction: defines the scrolling rate over time; defaults to ease in and out sin.
 * You can either use one of the predefined functions from EASING_FUNCTIONS or a custom one.
 * offsetTop / offsetLeft: an additional offset value to adjust the scroll position; defaults to 0 (no additional offset)
 */
function smoothScrollToElement(element, {
  duration, easingFunction,
  offsetTop = 0,
  offsetLeft = 0
} = {}) {
  const rect = element.getBoundingClientRect();
  smoothScrollTo({
    top: document.scrollingElement.scrollTop + Math.round(rect.top) + offsetTop,
    left: document.scrollingElement.scrollLeft + Math.round(rect.left) + offsetLeft,
    duration: duration,
    easingFunction: easingFunction
  });
}


/*
 * Convenience function to scroll to an element in the main page by its id.
 * id: the id as a string that should be scrolled to
 * easingFunction: defines the scrolling rate over time; defaults to ease in and out sin.
 * You can either use one of the predefined functions from EASING_FUNCTIONS or a custom one.
 * duration: scroll duration in milliseconds; defaults to 0 (no transition)
 * offsetTop / offsetLeft: an additional offset value to adjust the scroll position; defaults to 0 (no additional offset)
 */
function smoothScrollToId(id, {
  duration, easingFunction,
  offsetTop = 0,
  offsetLeft = 0,
} = {}) {
  const element = document.getElementById(id);
  smoothScrollToElement(element, {
    duration: duration,
    easingFunction: easingFunction,
    offsetTop: offsetTop,
    offsetLeft: offsetLeft
  });
}
