jQuery(document).ready(function(){
	jQuery(".page-db .views-exposed-widgets label").each(_doit);
	jQuery('.region-search').remove();
});
function _doit(i, val){
	var parent = jQuery(val).parent(),
		label = parent.find("label").text().trim();
	
	parent.find("input[type=text").attr("placeholder", label);
	setFacets(parent, val, label);
	
	if(parent.find("a").hasClass("facetapi-active")){
		parent.find("li").addClass("facetapi-active");
	};
};


function setFacets(parent, val, label){
	
	
	switch(label){
		 case 'Grantor':
			var facet 	= jQuery('#block-facetapi-o7wjesgfkysx6mdzp0tokh9iu2q0ttbr');
			parent.append(facet);
		 break; 
		 case 'Recepient':
			parent.append(jQuery('#block-facetapi-0nkuqftrac7ixkaiaawciaoc1olu18cb'));
		 break; 
		 case 'Transaction Type':
			parent.append(jQuery('#block-facetapi-9d9lyrqsbwobfiwpzezmjqvuvhiadiza'));
		 break; 
		 case 'Institution':
			parent.append(jQuery('#block-facetapi-zrhau4wsf3rhj094agurrxjuq8rpbcoi'));
		 break; 
		}
	
};


		
