/*!
 * Color mode toggler for Bootstrap's docs (https://getbootstrap.com/)
 * Copyright 2011-2022 The Bootstrap Authors
 * Licensed under the Creative Commons Attribution 3.0 Unported License.
 * Modified by hawkeye116477
 */

(() => {
  'use strict'

  const storedTheme = localStorage.getItem('theme');
  const oldStoredTheme = localStorage.getItem('darkSwitch');

  const getPreferredTheme = () => {
    if (oldStoredTheme) {
      localStorage.setItem("theme", oldStoredTheme);
      localStorage.removeItem("darkSwitch");
      return oldStoredTheme;
    }
    else if (storedTheme) {
      return storedTheme;
    }
    else {
      return "auto";
    }
  }

  const setTheme = function (theme) {
    if (theme === 'auto') {
      document.documentElement.setAttribute('data-bs-theme', (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'))
    } else {
      document.documentElement.setAttribute('data-bs-theme', theme)
    }
  }

  setTheme(getPreferredTheme())

  const showActiveTheme = theme => {
    const activeSelectors = document.querySelectorAll('.theme-icon-active')
    const activeButtons = document.querySelectorAll(`[data-bs-theme-value="${theme}"]`)
    if (activeButtons.length > 0) {
      const activeIcon = activeButtons[0].querySelector('span')

      document.querySelectorAll('[data-bs-theme-value]').forEach(element => {
        element.classList.remove('active')
      })

      for (let i = 0; i < activeSelectors.length; ++i) {
        activeSelectors[i].innerHTML = activeIcon.innerHTML
      }

      for (let i = 0; i < activeButtons.length; ++i) {
        activeButtons[i].classList.add('active')
      }
    }
  }

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    if (storedTheme !== 'light' || storedTheme !== 'dark') {
      setTheme(getPreferredTheme())
    }
  })

  window.addEventListener('DOMContentLoaded', () => {
    showActiveTheme(getPreferredTheme())

    document.querySelectorAll('[data-bs-theme-value]')
      .forEach(toggle => {
        toggle.addEventListener('click', () => {
          const theme = toggle.getAttribute('data-bs-theme-value')
          localStorage.setItem('theme', theme)
          setTheme(theme)
          showActiveTheme(theme)
        })
      })
  })
})()
