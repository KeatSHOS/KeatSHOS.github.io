
(function waitForTelerik() {
  if (
    typeof Telerik !== 'undefined' &&
    Telerik.Web &&
    Telerik.Web.UI &&
    Telerik.Web.UI.RadTreeView
  ) {
    Telerik.Web.UI.RadTreeView.prototype.saveClientState = function () {
      return "{\"expandedNodes\":" + this._expandedNodesJson +
        ",\"collapsedNodes\":" + this._collapsedNodesJson +
        ",\"logEntries\":" + this._logEntriesJson +
        ",\"selectedNodes\":" + this._selectedNodesJson +
        ",\"checkedNodes\":" + this._checkedNodesJson +
        ",\"scrollPosition\":" + Math.round(this._scrollPosition) + "}";
    };
    alert(1);
  } else {
    setTimeout(waitForTelerik, 100); // Retry every 100ms
  }
})();

