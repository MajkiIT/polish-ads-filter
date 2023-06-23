/*!
* Dark Mode Switch
* https://github.com/coliff/dark-mode-switch
* Released under the MIT License.
* Modified by hawkeye116477
* Thanks for https://github.com/popoway/dark-mode-switch/commit/c11cd31f39056d47cdd354e6796dcc2bc4c7b921
*/

const darkSwitch = document.getElementById('darkSwitch');
window.addEventListener('load', () => {
  if (darkSwitch) {
    initTheme();
    darkSwitch.addEventListener('change', () => {
      resetTheme();
    });
  }
});


/**
 * Summary: function that adds or removes the attribute 'data-theme' depending if
 * the switch is 'on' or 'off'.
 *
 * Description: initTheme is a function that uses localStorage from JavaScript DOM,
 * to store the value of the HTML switch. If the switch was already switched to
 * 'on' it will set an HTML attribute to the body named: 'data-theme' to a 'dark'
 * value. If it is the first time opening the page, or if the switch was off the
 * 'data-theme' attribute will not be set.
 * @return {void}
 */
function initTheme() {
  const systemPrefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const darkThemeSelected =
    localStorage.getItem('darkSwitch') !== null &&
    localStorage.getItem('darkSwitch') === 'dark';
  const lightThemeSelected =
    localStorage.getItem('darkSwitch') !== null &&
    localStorage.getItem('darkSwitch') === 'light';
  if (darkThemeSelected) {
    darkSwitch.checked = true;
    document.body.setAttribute('data-theme', 'dark');
    darkSwitch.bootstrapToggle('on');
  }
  else if (systemPrefersDarkMode && !lightThemeSelected) {
    darkSwitch.checked = true;
    darkSwitch.bootstrapToggle('on');
    document.body.setAttribute('data-theme', 'dark');
  }
  else {
    darkSwitch.checked = false;
    document.body.removeAttribute('data-theme');
  }
}

/**
 * Summary: resetTheme checks if the switch is 'on' or 'off' and if it is toggled
 * on it will set the HTML attribute 'data-theme' to dark so the dark-theme CSS is
 * applied.
 * @return {void}
 */
function resetTheme() {
  if (darkSwitch.checked) {
    document.body.setAttribute('data-theme', 'dark');
    localStorage.setItem('darkSwitch', 'dark');
  } else {
    document.body.removeAttribute('data-theme');
    localStorage.setItem('darkSwitch', 'light');
  }
}
