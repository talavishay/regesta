/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	jQuery(document).ready(_init);	

	function _init(){
		jQuery(".views-exposed-widgets label").each(_doit);
		jQuery('.region-search').hide();
		jQuery("#edit-field-institution-recipient-wrapper label").text("Search by parameters");
		
		jQuery("#edit-search-api-views-fulltext-wrapper .form-item input").first()
			.after(jQuery(".views-submit-button").clone());
		if(jQuery("body").hasClass("page-database")){
			initSearch();
		};
	};

	function initSearch(i, val){
		jQuery(".views-more-link")
			.on("click",function(e){
				e.preventDefault();
				
				var row = jQuery(e.currentTarget).parents('.views-row'),
					html = row.clone().html();
			
				var wrap = jQuery(html).wrap('<div class="views-row"></div>');
				
				jQuery('<div class="searchdb popup"></div>')
					.html(wrap)
					.dialog({	
						modal : true,		
						title: "",	
						width: '80%',
						open : function(d) {
							jQuery('.ui-dialog')
								.prepend(jQuery(".ui-dialog .ui-button"))
								.find(".ui-dialog-titlebar").remove();
							
							var dialog = this;
							jQuery(".ui-button", this).on("click", function(){
											jQuery(dialog).dialog('destroy').remove();
							});

						},
						close : function() {
							jQuery(this).dialog('destroy').remove();
						}
					}).dialog('open');
				
					
				return false;
		});
	};
	function _doit(i, val){
		var parent = jQuery(val).parent(),
			label = parent.find("label").text().trim();
		
		parent.find("input").attr("placeholder", label);
		setFacets(parent, val, label);
		
		if(parent.find("a").hasClass("facetapi-active")){
			parent.find("li").addClass("facetapi-active");
		};
	};

	function setFacets(parent, val, label){
		
		
		switch(label){
			case 'Grantor':
				var facetBlock1 = jQuery('#block-facetapi-o7wjesgfkysx6mdzp0tokh9iu2q0ttbr'),
					facetBlock2 = jQuery('#block-views-ddeda97f67f133433b7ffff1d01e7c51');
				parent.append( facetBlock1.length ? facetBlock1 : facetBlock2 );
			break; 
			case 'Recepient':
				var facetBlock1 = jQuery('#block-facetapi-0nkuqftrac7ixkaiaawciaoc1olu18cb'),
					facetBlock2 = jQuery('#block-views-1fc7af91c1ec7d75ac090782522c4619');
				parent.append( facetBlock1.length ? facetBlock1 : facetBlock2 );
			break; 
			case 'Transaction Type':
				var facetBlock1 = jQuery('#block-facetapi-9d9lyrqsbwobfiwpzezmjqvuvhiadiza'),
				
					facetBlock2 = jQuery('#block-views-4d96955e155a195b9cd50546209f5f3d');
				parent.append( facetBlock1.length ? facetBlock1 : facetBlock2 );
				
			 break; 
			 case 'Institution':
				var facetBlock1 = jQuery('#block-facetapi-zrhau4wsf3rhj094agurrxjuq8rpbcoi'),
					facetBlock2 = jQuery('#block-views-db16f3c75d1e773a9b51a79f51632332');
				parent.append( facetBlock1.length ? facetBlock1 : facetBlock2 );
			 break; 
			}
		
	};

	function open_dialog(nid) {
			jQuery(".ui-dialog-content").dialog("close").remove();
			
		jQuery('<div></div>').dialog({
			width : width,
			// height: 4	00,
			//~ position : {
				//~ my : "center",
				//~ at : "top",
				//~ within : within
			//~ },
			resizable : false,
			modal : true,
			draggable : false,
			show : "explode",
			open : function() {
				jQuery(this).append('<img style="margin: 20px auto;display: block;" id="wait" src="/sites/all/themes/omega3sub/images/busy.gif" />');
				jQuery(".ui-dialog-titlebar", this).remove();
				open_popup_node(this, nid);
				jQuery('.ui-dialog').prepend(jQuery(".ui-dialog .ui-button"));

			},
			close : function() {
				jQuery(this).dialog('destroy').remove();
			}
		});
	}
			


/***/ }
/******/ ]);