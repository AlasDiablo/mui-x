import { GridLocaleText } from '../models/api/gridLocaleTextApi';
import { getGridLocalization, Localization } from '../utils/getGridLocalization';
import {getGridInternationalization} from '../utils/getGridInternationalization';

const internationalization = getGridInternationalization('nn-NO');

const nnNOGrid: Partial<GridLocaleText> = {
  // Root
  noRowsLabel: 'Ingen rader',
  noResultsOverlayLabel: 'Fann ingen resultat.',
  // noColumnsOverlayLabel: 'No columns',
  // noColumnsOverlayManageColumns: 'Manage columns',
  // emptyPivotOverlayLabel: 'Add fields to rows, columns, and values to create a pivot table',

  // Density selector toolbar button text
  toolbarDensity: 'Tettheit',
  toolbarDensityLabel: 'Tettheit',
  toolbarDensityCompact: 'Kompakt',
  toolbarDensityStandard: 'Standard',
  toolbarDensityComfortable: 'Komfortabelt',

  // Columns selector toolbar button text
  toolbarColumns: 'Kolonner',
  toolbarColumnsLabel: 'Vel kolonner',

  // Filters toolbar button text
  toolbarFilters: 'Filter',
  toolbarFiltersLabel: 'Vis filter',
  toolbarFiltersTooltipHide: 'Skjul filter',
  toolbarFiltersTooltipShow: 'Vis filter',
  toolbarFiltersTooltipActive: (count) =>
    count !== 1 ? `${count} aktive filter` : `${count} aktivt filter`,

  // Quick filter toolbar field
  toolbarQuickFilterPlaceholder: 'Søk…',
  toolbarQuickFilterLabel: 'Søk',
  toolbarQuickFilterDeleteIconLabel: 'Slett',

  // Export selector toolbar button text
  toolbarExport: 'Eksporter',
  toolbarExportLabel: 'Eksporter',
  toolbarExportCSV: 'Last ned som CSV',
  toolbarExportPrint: 'Skriv ut',
  toolbarExportExcel: 'Last ned som Excel',

  // Toolbar pivot button
  // toolbarPivot: 'Pivot',

  // Toolbar AI Assistant button
  // toolbarAssistant: 'AI Assistant',

  // Columns management text
  columnsManagementSearchTitle: 'Søk',
  columnsManagementNoColumns: 'Ingen kolonner',
  columnsManagementShowHideAllText: 'Vis/skjul alle',
  columnsManagementReset: 'Nullstill',
  // columnsManagementDeleteIconLabel: 'Clear',

  // Filter panel text
  filterPanelAddFilter: 'Legg til filter',
  filterPanelRemoveAll: 'Fjern alle',
  filterPanelDeleteIconLabel: 'Slett',
  filterPanelLogicOperator: 'Logisk operator',
  filterPanelOperator: 'Operator',
  filterPanelOperatorAnd: 'Og',
  filterPanelOperatorOr: 'Eller',
  filterPanelColumns: 'Kolonner',
  filterPanelInputLabel: 'Verdi',
  filterPanelInputPlaceholder: 'Filter verdi',

  // Filter operators text
  filterOperatorContains: 'inneheld',
  // filterOperatorDoesNotContain: 'does not contain',
  filterOperatorEquals: 'er lik',
  // filterOperatorDoesNotEqual: 'does not equal',
  filterOperatorStartsWith: 'startar med',
  filterOperatorEndsWith: 'sluttar med',
  filterOperatorIs: 'er',
  filterOperatorNot: 'er ikkje',
  filterOperatorAfter: 'er etter',
  filterOperatorOnOrAfter: 'er på eller etter',
  filterOperatorBefore: 'er før',
  filterOperatorOnOrBefore: 'er på eller før',
  filterOperatorIsEmpty: 'er tom',
  filterOperatorIsNotEmpty: 'er ikkje tom',
  filterOperatorIsAnyOf: 'er ein av',
  'filterOperator=': '=',
  'filterOperator!=': '!=',
  'filterOperator>': '>',
  'filterOperator>=': '>=',
  'filterOperator<': '<',
  'filterOperator<=': '<=',

  // Header filter operators text
  headerFilterOperatorContains: 'Inneheld',
  // headerFilterOperatorDoesNotContain: 'Does not contain',
  headerFilterOperatorEquals: 'Lik',
  // headerFilterOperatorDoesNotEqual: 'Does not equal',
  headerFilterOperatorStartsWith: 'Startar på',
  headerFilterOperatorEndsWith: 'Sluttar på',
  headerFilterOperatorIs: 'Er',
  headerFilterOperatorNot: 'Er ikkje',
  headerFilterOperatorAfter: 'Er etter',
  headerFilterOperatorOnOrAfter: 'Er på eller etter',
  headerFilterOperatorBefore: 'Er før',
  headerFilterOperatorOnOrBefore: 'Er på eller før',
  headerFilterOperatorIsEmpty: 'Er tom',
  headerFilterOperatorIsNotEmpty: 'Er ikkje tom',
  headerFilterOperatorIsAnyOf: 'Er ein av',
  'headerFilterOperator=': 'Lik',
  'headerFilterOperator!=': 'Ikkje lik',
  'headerFilterOperator>': 'Større enn',
  'headerFilterOperator>=': 'Større enn eller lik',
  'headerFilterOperator<': 'Mindre enn',
  'headerFilterOperator<=': 'Mindre enn eller lik',
  // headerFilterClear: 'Clear filter',

  // Filter values text
  filterValueAny: 'nokon',
  filterValueTrue: 'sant',
  filterValueFalse: 'usant',

  // Column menu text
  columnMenuLabel: 'Meny',
  // columnMenuAriaLabel: (columnName: string) => `${columnName} column menu`,
  columnMenuShowColumns: 'Vis kolonner',
  columnMenuManageColumns: 'Administrer kolonner',
  columnMenuFilter: 'Filter',
  columnMenuHideColumn: 'Skjul',
  columnMenuUnsort: 'Usorter',
  columnMenuSortAsc: 'Sorter AUKANDE',
  columnMenuSortDesc: 'Sorter SYNKANDE',
  // columnMenuManagePivot: 'Manage pivot',

  // Column header text
  columnHeaderFiltersTooltipActive: (count) =>
    count !== 1 ? `${count} aktive filter` : `${count} aktivt filter`,
  columnHeaderFiltersLabel: 'Vis filter',
  columnHeaderSortIconLabel: 'Sorter',

  // Rows selected footer text
  footerRowSelected: (count) =>
    count !== 1 ? `${count.toLocaleString()} rader valt` : `${count.toLocaleString()} rad valt`,

  // Total row amount footer text
  footerTotalRows: 'Totalt tal rader:',

  // Total visible row amount footer text
  footerTotalVisibleRows: (visibleCount, totalCount) =>
    `${visibleCount.toLocaleString()} av ${totalCount.toLocaleString()}`,

  // Checkbox selection text
  checkboxSelectionHeaderName: 'Avmerkingsboks',
  checkboxSelectionSelectAllRows: 'Vel alle rader',
  checkboxSelectionUnselectAllRows: 'Vel vekk alle rader',
  checkboxSelectionSelectRow: 'Vel rad',
  checkboxSelectionUnselectRow: 'Vel vekk rad',

  // Boolean cell text
  booleanCellTrueLabel: 'sant',
  booleanCellFalseLabel: 'usant',

  // Actions cell more text
  actionsCellMore: 'meir',

  // Column pinning text
  pinToLeft: 'Fest til venstre',
  pinToRight: 'Fest til høgre',
  unpin: 'Lausne',

  // Tree Data
  treeDataGroupingHeaderName: 'Grupper',
  treeDataExpand: 'vis barn',
  treeDataCollapse: 'skjul barn',

  // Grouping columns
  groupingColumnHeaderName: 'Grupper',
  groupColumn: (name) => `Grupper på ${name}`,
  unGroupColumn: (name) => `Slutt å grupper på ${name}`,

  // Master/detail
  detailPanelToggle: 'Utvid/kollaps detalj panel',
  expandDetailPanel: 'Utvid',
  collapseDetailPanel: 'Kolaps',

  // Pagination
  paginationRowsPerPage: 'Rader per side:',
  // paginationDisplayedRows: ({
  //   from,
  //   to,
  //   count,
  //   estimated
  // }) => {
  //   if (!estimated) {
  //     return `${from}–${to} of ${count !== -1 ? count : `more than ${to}`}`;
  //   }
  //   const estimatedLabel = estimated && estimated > to ? `around ${estimated}` : `more than ${to}`;
  //   return `${from}–${to} of ${count !== -1 ? count : estimatedLabel}`;
  // },
  paginationItemAriaLabel: (type) => {
    if (type === 'first') {
      return 'Gå til første side';
    }
    if (type === 'last') {
      return 'Gå til siste side';
    }
    if (type === 'next') {
      return 'Gå til neste side';
    }
    // if (type === 'previous') {
    return 'Gå til førre side';
  },

  // Row reordering text
  rowReorderingHeaderName: 'Radreorganisering',

  // Aggregation
  aggregationMenuItemHeader: 'Aggregering',
  aggregationFunctionLabelSum: 'sum',
  aggregationFunctionLabelAvg: 'snitt',
  aggregationFunctionLabelMin: 'min',
  aggregationFunctionLabelMax: 'maks',
  aggregationFunctionLabelSize: 'størrelse',

  // Pivot panel
  // pivotToggleLabel: 'Pivot',
  // pivotRows: 'Rows',
  // pivotColumns: 'Columns',
  // pivotValues: 'Values',
  // pivotCloseButton: 'Close pivot settings',
  // pivotSearchButton: 'Search fields',
  // pivotSearchControlPlaceholder: 'Search fields',
  // pivotSearchControlLabel: 'Search fields',
  // pivotSearchControlClear: 'Clear search',
  // pivotNoFields: 'No fields',
  // pivotMenuMoveUp: 'Move up',
  // pivotMenuMoveDown: 'Move down',
  // pivotMenuMoveToTop: 'Move to top',
  // pivotMenuMoveToBottom: 'Move to bottom',
  // pivotMenuRows: 'Rows',
  // pivotMenuColumns: 'Columns',
  // pivotMenuValues: 'Values',
  // pivotMenuOptions: 'Field options',
  // pivotMenuAddToRows: 'Add to Rows',
  // pivotMenuAddToColumns: 'Add to Columns',
  // pivotMenuAddToValues: 'Add to Values',
  // pivotMenuRemove: 'Remove',
  // pivotDragToRows: 'Drag here to create rows',
  // pivotDragToColumns: 'Drag here to create columns',
  // pivotDragToValues: 'Drag here to create values',
  // pivotYearColumnHeaderName: '(Year)',
  // pivotQuarterColumnHeaderName: '(Quarter)',

  // AI Assistant panel
  // aiAssistantPanelTitle: 'AI Assistant',
  // aiAssistantPanelClose: 'Close AI Assistant',
  // aiAssistantPanelNewConversation: 'New conversation',
  // aiAssistantPanelConversationHistory: 'Conversation history',
  // aiAssistantPanelEmptyConversation: 'No prompt history',
  // aiAssistantSuggestions: 'Suggestions',

  // Prompt field
  // promptFieldLabel: 'Prompt',
  // promptFieldPlaceholder: 'Type a prompt…',
  // promptFieldPlaceholderWithRecording: 'Type or record a prompt…',
  // promptFieldPlaceholderListening: 'Listening for prompt…',
  // promptFieldSpeechRecognitionNotSupported: 'Speech recognition is not supported in this browser',
  // promptFieldSend: 'Send',
  // promptFieldRecord: 'Record',
  // promptFieldStopRecording: 'Stop recording',

  // Prompt
  // promptRerun: 'Run again',
  // promptProcessing: 'Processing…',
  // promptAppliedChanges: 'Applied changes',

  // Prompt changes
  // promptChangeGroupDescription: (column: string) => `Group by ${column}`,
  // promptChangeAggregationLabel: (column: string, aggregation: string) => `${column} (${aggregation})`,
  // promptChangeAggregationDescription: (column: string, aggregation: string) => `Aggregate ${column} (${aggregation})`,
  // promptChangeFilterLabel: (column: string, operator: string, value: string) => {
  //   if (operator === 'is any of') {
  //     return `${column} is any of: ${value}`;
  //   }
  //   return `${column} ${operator} ${value}`;
  // },
  // promptChangeFilterDescription: (column: string, operator: string, value: string) => {
  //   if (operator === 'is any of') {
  //     return `Filter where ${column} is any of: ${value}`;
  //   }
  //   return `Filter where ${column} ${operator} ${value}`;
  // },
  // promptChangeSortDescription: (column: string, direction: string) => `Sort by ${column} (${direction})`,
  // promptChangePivotEnableLabel: 'Pivot',
  // promptChangePivotEnableDescription: 'Enable pivot',
  // promptChangePivotColumnsLabel: (count: number) => `Columns (${count})`,
  // promptChangePivotColumnsDescription: (column: string, direction: string) => `${column}${direction ? ` (${direction})` : ''}`,
  // promptChangePivotRowsLabel: (count: number) => `Rows (${count})`,
  // promptChangePivotValuesLabel: (count: number) => `Values (${count})`,
  // promptChangePivotValuesDescription: (column: string, aggregation: string) => `${column} (${aggregation})`,

  // Internationalisation
  ...internationalization,
};

export const nnNO: Localization = getGridLocalization(nnNOGrid);
