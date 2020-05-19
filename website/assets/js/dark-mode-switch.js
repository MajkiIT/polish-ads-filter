/*!
* Dark Mode Switch
* https://github.com/coliff/dark-mode-switch
* Released under the MIT License.
*/

const darkSwitch = document.getElementById('darkSwitch');
window.addEventListener('load', () => {
  if (darkSwitch) {
    initTheme();
    $('#darkSwitch').change(function() {
      resetTheme();
    })
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
  if (darkThemeSelected) {
    darkSwitch.checked = true;
    document.body.setAttribute('data-theme', 'dark');
    $('#darkSwitch').bootstrapToggle('on');
  }
  else if (systemPrefersDarkMode) {
    darkSwitch.checked = true;
    darkSwitch.disabled = true;
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
    localStorage.removeItem('darkSwitch');
  }
}
