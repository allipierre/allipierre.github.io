/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your customer ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojtable','ojs/ojtree'],
 function(oj, ko, $) {
     
    function CustomerViewModel() {
     var self = this;
     //var employees='employees/';
    self.data = ko.observableArray();
        self.data = ko.observableArray();
        $.getJSON("https://apex.oracle.com/pls/apex/pierrealli/hr/employees/").
                then(function (pData) {
                   for (var i=0; i < pData.items.length; i++){
                        self.data.push({
                            empno: pData.items[i].empno,
                            ename: pData.items[i].ename,
                            job: pData.items[i].job,
                            hiredate: pData.items[i].hiredate,
                            mgr: pData.items[i].mgr,
                            sal: pData.items[i].sal,
                            comm: pData.items[i].comm,
                            deptno: pData.items[i].deptno
                        });
                   }
                });
        self.datasource = new oj.ArrayTableDataSource(
                self.data, 
                {idAttribute: 'empno'}
        );

    
     
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
     
     
        
        $("#tree").on("ojoptionchange", function(e, ui) {
            if (ui.option === "selection") {
                // show selected nodes
                var selected = _arrayToStr(ui.value);
                $("#results").html("<label> id = " + selected + "</label>");
            }
        });

    }
  );

    

    /*
     * Returns a constructor for the ViewModel so that the ViewModel is constrcuted
     * each time the view is displayed.  Return an instance of the ViewModel if
     * only one instance of the ViewModel is needed.
     */
    return   getCustomerViewModel();
    
    
    function  loadNode(node)
  {
     if (node === -1) {
        // Requesting node data for Tree.
        return "http://www.oracle.com/webfolder/technetwork/jet/demo/cookbook/dataCollections/tree/treeLazyLoadAjax/json/root.json" ;
     }
     else {
        // Requesting node data for a particular node
        return "http://www.oracle.com/webfolder/technetwork/jet/demo/cookbook/dataCollections/tree/treeLazyLoadAjax/json/root.json/"
                      + node.attr("id") + ".json";
     }
  };
  
  function  loadSuccess(data, status, obj)
  {
      // Data successfully retrieved.  Can optionally transform
      // it and return it here if required.
  };

  function loadError(reason, feedback, obj)
  {
     // Ajax error.  Look at reason and feedback.message ;
  };
  
   // Convert a jQuery list of html element nodes to string containing node id's.
  function _arrayToStr(arr)
  {
     var s = "" ;
     $.each(arr, function(i, val)
        {
          if (i) {
            s += ", " ;
          }
          s += $(arr[i]).attr("id") ;
        }) ;

     return s ;
  };
  function getCustomerViewModel(){
       return new CustomerViewModel();
  }

  }
);
