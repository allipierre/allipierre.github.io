/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your incidents ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'promise', 'ojs/ojmodel', 'ojs/ojtable', 'ojs/ojcollectiontabledatasource','ojs/ojbutton', 'ojs/ojchart', 'ojs/ojtoolbar'],
 function(oj, ko, $) {
  
    function IncidentsViewModel() {
     self.DeptCol = ko.observable();
self.datasource = ko.observable();

self.serviceURL = 'https://apex.oracle.com/pls/apex/pierrealli/hr/employees/';
self.parseDept = function(response) {
    return {empno: response['empno'],
        DepartmentName: response['ename'],
        LocationId: response['job'],
        ManagerId: response['hiredate'],
        mgr: response['mgr'],
        sal: response['sal'],
        comm: response['comm'],
        deptno: response['deptno']};
};
self.Department = oj.Model.extend({
    urlRoot: self.serviceURL,
    parse: self.parseDept,
    idAttribute: 'empno'
});

self.myDept = new self.Department();
self.DeptCollection = oj.Collection.extend({
    url: self.serviceURL,
    model: self.myDept
});

self.DeptCol(new self.DeptCollection());
   $.getJSON("https://apex.oracle.com/pls/apex/pierrealli/hr/employees/",
            function (data) {
                         
                        self.datasource(new oj.CollectionTableDataSource(self.DeptCol()));
                      }); 
                      
                      
                      
                      
                      
         /* toggle button variables */
        self.stackValue = ko.observable('off');
        self.orientationValue = ko.observable('vertical');
        
        /* chart data */
        var areaSeries = [{name : "Series 1", items : [74, 42, 70, 46]},
                          {name : "Series 2", items : [50, 58, 46, 54]},
                          {name : "Series 3", items : [34, 22, 30, 32]},
                          {name : "Series 4", items : [18,  6, 14, 22]}];
    
        var areaGroups = ["Group A", "Group B", "Group C", "Group D"];
   
        
        this.areaSeriesValue = ko.observableArray(areaSeries);
        this.areaGroupsValue = ko.observableArray(areaGroups);
        
        /* toggle buttons*/
        self.stackOptions = [
            {id: 'unstacked', label: 'unstacked', value: 'off', icon: 'oj-icon demo-area-vert'},
            {id: 'stacked', label: 'stacked', value: 'on', icon: 'oj-icon demo-area-stack'}
        ];
        self.orientationOptions = [
            {id: 'vertical', label: 'vertical', value: 'vertical', icon: 'oj-icon demo-area-vert'},
            {id: 'horizontal', label: 'horizontal', value: 'horizontal', icon: 'oj-icon demo-area-horiz'}
        ]; 
        
        
        
        
        
        
        
        
        /* toggle button variables */
        self.stackValue = ko.observable('off');
        self.orientationValue = ko.observable('vertical');
        
        /* chart data */
        var barSeries = [{name: "Series 1", items: [42, 34]},
                         {name: "Series 2", items: [55, 30]},
                         {name: "Series 3", items: [36, 50]},
                         {name: "Series 4", items: [22, 46]},
                         {name: "Series 5", items: [22, 46]}];
    
        var barGroups = ["Group A", "Group B"];
   
        self.barSeriesValue = ko.observableArray(barSeries);
        self.barGroupsValue = ko.observableArray(barGroups);
        
        /* toggle buttons*/
        self.stackOptions = [
            {id: 'unstacked', label: 'unstacked', value: 'off', icon: 'oj-icon demo-bar-unstack'},
            {id: 'stacked', label: 'stacked', value: 'on', icon: 'oj-icon demo-bar-stack'}
        ];
        self.orientationOptions = [
            {id: 'vertical', label: 'vertical', value: 'vertical', icon: 'oj-icon demo-bar-vert'},
            {id: 'horizontal', label: 'horizontal', value: 'horizontal', icon: 'oj-icon demo-bar-horiz'}
        ];
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

    /*
     * Returns a constructor for the ViewModel so that the ViewModel is constrcuted
     * each time the view is displayed.  Return an instance of the ViewModel if
     * only one instance of the ViewModel is needed.
     */
    return new IncidentsViewModel();
  }
);
