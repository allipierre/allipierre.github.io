/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your about ViewModel code goes here
 */



define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'promise', 'ojs/ojinputtext', 'ojs/ojinputnumber', 'ojs/ojtable', 'ojs/ojarraytabledatasource'],
 function(oj, ko, $) {
  
    function AboutViewModel() {
       var self = this;

    var self = this;
    var deptArray = [{DepartmentId: 1001, DepartmentName: 'ADFPM 1001 neverending', LocationId: 200, ManagerId: 300},
        {DepartmentId: 556, DepartmentName: 'BB', LocationId: 200, ManagerId: 300},
        {DepartmentId: 10, DepartmentName: 'Administration', LocationId: 200, ManagerId: 300},
        {DepartmentId: 20, DepartmentName: 'Marketing', LocationId: 200, ManagerId: 300},
        {DepartmentId: 30, DepartmentName: 'Purchasing', LocationId: 200, ManagerId: 300},
        {DepartmentId: 40, DepartmentName: 'Human Resources1', LocationId: 200, ManagerId: 300},
        {DepartmentId: 50, DepartmentName: 'Administration2', LocationId: 200, ManagerId: 300},
        {DepartmentId: 60, DepartmentName: 'Marketing3', LocationId: 200, ManagerId: 300},
        {DepartmentId: 70, DepartmentName: 'Purchasing4', LocationId: 200, ManagerId: 300},
        {DepartmentId: 80, DepartmentName: 'Human Resources5', LocationId: 200, ManagerId: 300},
        {DepartmentId: 90, DepartmentName: 'Human Resources11', LocationId: 200, ManagerId: 300},
        {DepartmentId: 100, DepartmentName: 'Administration12', LocationId: 200, ManagerId: 300},
        {DepartmentId: 110, DepartmentName: 'Marketing13', LocationId: 200, ManagerId: 300},
        {DepartmentId: 120, DepartmentName: 'Purchasing14', LocationId: 200, ManagerId: 300},
        {DepartmentId: 130, DepartmentName: 'Human Resources15', LocationId: 200, ManagerId: 300}];
    self.datasource = new oj.ArrayTableDataSource(deptArray, {idAttribute: 'DepartmentId'});
    
    
    
    
    
    var deptArraye = [{DepartmentId: 1001, DepartmentName: 'ADFPM 1001 neverending', LocationId: 200, ManagerId: 300},
        {DepartmentId: 556, DepartmentName: 'BB', LocationId: 200, ManagerId: 300},
        {DepartmentId: 10, DepartmentName: 'Administration', LocationId: 200, ManagerId: 300},
        {DepartmentId: 20, DepartmentName: 'Marketing', LocationId: 200, ManagerId: 300},
        {DepartmentId: 30, DepartmentName: 'Purchasing', LocationId: 200, ManagerId: 300},
        {DepartmentId: 40, DepartmentName: 'Human Resources1', LocationId: 200, ManagerId: 300},
        {DepartmentId: 50, DepartmentName: 'Administration2', LocationId: 200, ManagerId: 300},
        {DepartmentId: 60, DepartmentName: 'Marketing3', LocationId: 200, ManagerId: 300},
        {DepartmentId: 70, DepartmentName: 'Purchasing4', LocationId: 200, ManagerId: 300},
        {DepartmentId: 80, DepartmentName: 'Human Resources5', LocationId: 200, ManagerId: 300},
        {DepartmentId: 90, DepartmentName: 'Human Resources11', LocationId: 200, ManagerId: 300},
        {DepartmentId: 100, DepartmentName: 'Administration12', LocationId: 200, ManagerId: 300},
        {DepartmentId: 110, DepartmentName: 'Marketing13', LocationId: 200, ManagerId: 300},
        {DepartmentId: 120, DepartmentName: 'Purchasing14', LocationId: 200, ManagerId: 300},
        {DepartmentId: 130, DepartmentName: 'Human Resources15', LocationId: 200, ManagerId: 300}];
    self.depteObservableArray = ko.observableArray(deptArraye);
    self.datasource_s = new oj.ArrayTableDataSource(self.depteObservableArray, {idAttribute: 'DepartmentId'});
    
    
    //add to the observableArray or add to the ojTable
    self.addRow = function()
    {
       var dept = {
                     'DepartmentId': self.inputDepartmentIds(),//Read Data from Inputfield and add to observableArray
                     'DepartmentName': self.inputDepartmentName(),
                     'LocationId': self.inputLocationId(),
                     'ManagerId': self.inputManagerId()
                  };
        self.depteObservableArray.push(dept);
    };
    
    //used to update the fields based on the selected row
    self.updateRow = function()
    {
        var currentRow = $('#table_y').ojTable('option', 'currentRow');
        
        if (currentRow !== null)
        {
            self.depteObservableArray.splice(currentRow['rowIndex'], 1, {
                         'DepartmentId': self.inputDepartmentIds(),
                         'DepartmentName': self.inputDepartmentName(),
                         'LocationId': self.inputLocationId(),
                         'ManagerId': self.inputManagerId()
                      });
        }
    };
    
    //used to remove the selected row
    self.removeRow = function()
    {
        var currentRow = $('#table_y').ojTable('option', 'currentRow');

        if (currentRow != null)
        {
            self.depteObservableArray.splice(currentRow['rowIndex'], 1);
        }
    };
    
    //intialize the observable values in the forms
    self.inputDepartmentIds = ko.observable();
    self.inputDepartmentName = ko.observable();
    self.inputLocationId = ko.observable();  
    self.inputManagerId = ko.observable();
      // Below are a subset of the ViewModel methods invoked by the ojModule binding
      // Please reference the ojModule jsDoc for additionaly available methods.

      /**
       * Optional ViewModel method invoked when this ViewModel is about to be
       * used for the View transition.  The application can put data fetch logic
       * here that can return a Promise which will delay the handleAttached function
       * call below until the Promise is resolved.
       * @param {Object} info - An object with the following key-value pairs:
       * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
       * @param {Function} info.valueAccessor - The binding's value accessor.
       * @return {Promise|undefined} - If the callback returns a Promise, the next phase (attaching DOM) will be delayed until
       * the promise is resolved
       */
      self.handleActivated = function(info) {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after the View is inserted into the
       * document DOM.  The application can put logic that requires the DOM being
       * attached here.
       * @param {Object} info - An object with the following key-value pairs:
       * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
       * @param {Function} info.valueAccessor - The binding's value accessor.
       * @param {boolean} info.fromCache - A boolean indicating whether the module was retrieved from cache.
       */
      self.handleAttached = function(info) {
        // Implement if needed
      };


      /**
       * Optional ViewModel method invoked after the bindings are applied on this View. 
       * If the current View is retrieved from cache, the bindings will not be re-applied
       * and this callback will not be invoked.
       * @param {Object} info - An object with the following key-value pairs:
       * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
       * @param {Function} info.valueAccessor - The binding's value accessor.
       */
      self.handleBindingsApplied = function(info) {
        // Implement if needed
      };

      /*
       * Optional ViewModel method invoked after the View is removed from the
       * document DOM.
       * @param {Object} info - An object with the following key-value pairs:
       * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
       * @param {Function} info.valueAccessor - The binding's value accessor.
       * @param {Array} info.cachedNodes - An Array containing cached nodes for the View if the cache is enabled.
       */
      self.handleDetached = function(info) {
        // Implement if needed
      };
    }


  
  $(document).ready
  (
    function()
    {
     
      $('#table_3').on('ojoptionchange', selectionListener);
      $('#selectionButton').on('click', currentSelection);
      $('#table_y').on('ojoptionchange', currentRowListener);
    }
  );



    /*
     * Returns a constructor for the ViewModel so that the ViewModel is constrcuted
     * each time the view is displayed.  Return an instance of the ViewModel if
     * only one instance of the ViewModel is needed.
     */
   
    return new getAboutViewModel();
    function selectionListener(event, data)
    {
        if (data['option'] == 'selection')
        {
            var eventTxt = "Triggered ojoptionchange event for selection: \n";
            var selectionObj = data['value'];
            
            if (selectionObj == null)
            {
                var currentTxt = $('#selectionEventLog').val();
                currentTxt = currentTxt == null ? '' : currentTxt; 
                $('#selectionEventLog').val(eventTxt + "Selection is null \n" + currentTxt);
                return;
            }
            var i = 0;
            for (i = 0; i < selectionObj.length; i++)
            {
                var range = selectionObj[i];
                var startIndex = range.startIndex;
                var endIndex = range.endIndex;
                var startKey = range.startKey;
                var endKey = range.endKey;

                if (startIndex != null && startIndex.row != null)
                {
                    //row selection
                    eventTxt = eventTxt + "Row Selection\n";
                    eventTxt = eventTxt + "start row index: " + startIndex.row + ", end row index: " + endIndex.row + "\n";
                }
                if (startKey != null && startKey.row != null)
                {
                    eventTxt = eventTxt + "start row key: " + startKey.row + ", end row key: " + endKey.row + "\n";
                }

                if (startIndex != null && startIndex.column != null)
                {
                    //column selection
                    eventTxt = eventTxt + "Column Selection\n";
                    eventTxt = eventTxt + "start column index: " + startIndex.column + ", end column index: " + endIndex.column + "\n";
                }
                if (startKey != null && startKey.column != null)
                {
                    eventTxt =eventTxt + "start column key: " + startKey.column + ", end column key: " + endKey.column + "\n";
                }
            }
            var currentTxt = $('#selectionEventLog').val();
            currentTxt = currentTxt == null ? '' : currentTxt; 
            $('#selectionEventLog').val(eventTxt + "\n" + currentTxt);
        }
    };
    
    function currentSelection()
    {
        var selectionObj = $("#table_3").ojTable("option", "selection");
        var selectionTxt = "";

        var i = 0;
        for (i = 0; i < selectionObj.length; i++)
        {
            var range = selectionObj[i];
            var startIndex = range.startIndex;
            var endIndex = range.endIndex;
            var startKey = range.startKey;
            var endKey = range.endKey;

            if (startIndex != null && startIndex.row != null)
            {
                //row selection
                selectionTxt = selectionTxt + "Row Selection\n";
                selectionTxt = selectionTxt + "start row index: " + startIndex.row + ", end row index: " + endIndex.row + "\n";
            }
            if (startKey != null && startKey.row != null)
            {
                selectionTxt = selectionTxt + "start row key: " + startKey.row + ", end row key: " + endKey.row + "\n";
            }

            if (startIndex != null && startIndex.column != null)
            {
                //column selection
                selectionTxt = selectionTxt + "Column Selection\n";
                selectionTxt = selectionTxt + "start column index: " + startIndex.column + ", end column index: " + endIndex.column + "\n";
            }
            if (startKey != null && startKey.column != null)
            {
                selectionTxt = selectionTxt + "start column key: " + startKey.column + ", end column key: " + endKey.column + "\n";
            }
        }
        $('#selectionCurrent').val(selectionTxt);
    };
    
    
    function currentRowListener(event, data)
  {
      
    if (data['option'] === 'currentRow' && data['value'] !== null)
    {
      var rowIndex = data['value']['rowIndex'];
      var dept = depteObservableArray()[rowIndex];
      inputDepartmentIds(dept['DepartmentId']);
      inputDepartmentName(dept['DepartmentName']);
      inputLocationId(dept['LocationId']);
      inputManagerId(dept['ManagerId']);
    }
  };
  
  function getAboutViewModel(){
       return AboutViewModel();
  }
  }
          
          
);
