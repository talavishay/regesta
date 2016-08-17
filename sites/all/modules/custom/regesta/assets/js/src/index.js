try {
	var Mark = require('./jquery.mark.min.js');
} catch(e) {
	console.log(e);
};
jQuery(document).ready(_init);
function _init(){
	// search inpus placeholders
	jQuery(".views-exposed-widgets label").each(_labelToPlaceHolder);
	
	// facet behaviours
	facethoverIntent();
	jQuery('.region-search').hide();
	jQuery("#edit-field-institution-recipient-wrapper label").text("Search by parameters");
	
	jQuery("#edit-search-api-views-fulltext-wrapper .form-item input").first()
		.after(jQuery(".views-submit-button").clone());
	
	// query word highlight
	if(jQuery("body").hasClass("page-database")){
		var query = getQueryString('search_api_views_fulltext');
		if(query){
			var queryWrap = jQuery('<span class="query">' + query + '</span>');
			Mark(queryWrap).mark(query);
			Mark('.full-text, .teaser-text').mark(query);
			jQuery(".view-header").before(queryWrap);
		};
		initSearch();
	};
	
	//BUGFIX : facet-api duplicates
	jQuery("li.facetapi-active").each(function(i ,val){
		if(jQuery("a", val).hasClass("facetapi-active")){
			return ;
		}
		jQuery(val).removeClass("facetapi-active");
	});
};

function initSearch(i, val){
	// popup behaviour
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
				width: '800px',
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
function _labelToPlaceHolder(i, val){
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
		case 'Recipient':
			var facetBlock1 = jQuery('#block-facetapi-0nkuqftrac7ixkaiaawciaoc1olu18cb'),
				facetBlock2 = jQuery('#block-views-1fc7af91c1ec7d75ac090782522c4619');
			parent.append( facetBlock1.length ? facetBlock1 : facetBlock2 );
		break; 
		case 'Document type':
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

function facethoverIntent() {
	var facetTitle = jQuery('.views-exposed-widget h2');
	facetTitle.each(function(i, val){
		jQuery(val)
			.on("mouseenter", function(e){
				var widget = jQuery(e.currentTarget)
						.parents(".views-exposed-widget"); 
				jQuery("input", widget)
					.addClass("focus");
			}).on("mouseout", function(e){
				var widget = jQuery(e.currentTarget)
						.parents(".views-exposed-widget"); 
				jQuery("input", widget)
					.removeClass("focus");
			});
	});
	
	jQuery('.views-exposed-widget .content, .views-exposed-widget .content *').on("mouseenter", function(e){
		var widget = jQuery(e.currentTarget).parents(".views-exposed-widget"); 
		jQuery("input", widget).addClass("focus");
	}).on("mouseout", function(e){
		var widget = jQuery(e.currentTarget).parents(".views-exposed-widget"); 
		jQuery("input", widget).removeClass("focus");
	});
	
	//~ facetTitleFixDimensions(facetTitle);
};
function facetTitleFixDimensions(facetTitle){
	jQuery(facetTitle).each(function(i, val){
		var	widget 		= jQuery( val ).parents(".views-exposed-widget"),
			input		= jQuery( "input", widget),
			inputWidth	= jQuery( input ).width(),
			inputHeight	= jQuery( input ).height();
		
		jQuery( val ).width( inputWidth );
		jQuery( val ).height( inputHeight );
	});
};
/**
 * Get the value of a querystring
 * @param  {String} field The field to get the value of
 * @param  {String} url   The URL to get the value from (optional)
 * @return {String}       The field value
 */
var getQueryString = function ( field, url ) {
    var href = url ? url : window.location.href;
    var reg = new RegExp( '[?&]' + field + '=([^&#]*)', 'i' );
    var string = reg.exec(href);
    queryString = string ? string[1] : null;
    if(queryString){
		queryString = queryString.replace(/%20/g, "");
		queryString = queryString.replace('+', "");
	}
    return queryString;
};
