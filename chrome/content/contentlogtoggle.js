/* This program is free software; you can redistribute it and/or modify it
under the terms of the GNU General Public License as published by the Free
Software Foundation; either version 2 of the License, or (at your option)
any later version.

This program is distributed in the hope that it will be useful, but
WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
or FITNESS for A PARTICULAR PURPOSE. See the GNU General Public License
for more details.

http://creativecommons.org/licenses/GPL/2.0/

Felipe Gomes 2011 www.felipc.com
*/

let felipc_contentlog = {
  init: function felipc_cl_init() {
    this.updateButton();
  },

  updateButton: function felipc_cl_updateButton() {
    let button = document.getElementById("felipc-contentlog-toggle-button");
    if (!button)
      return;

    let checked = false;
    try {
      checked = Services.prefs.getBoolPref("browser.contentLog.isEnabled");
    } catch (ex) {}

    if (checked)
      button.setAttribute("checked", "true");
    else
      button.removeAttribute("checked");
  },

  command: function felipc_cl_command() {
    let button = document.getElementById("felipc-contentlog-toggle-button");
    let checked = button.getAttribute("checked") == "true";
    Services.prefs.setBoolPref("browser.contentLog.isEnabled", checked);
  }
};

window.addEventListener("DOMContentLoaded", function() felipc_contentlog.init(), false);
