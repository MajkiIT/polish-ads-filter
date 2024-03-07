function iconRenderer(data) {
	let prefix = '';
	
	/** skipping options those are added newly by allowNewOption feature */
	if (!data.isCurrentNew && !data.isNew) {
		var icon = data.customData.icon;
		prefix = `<i class="icon-dropdown ${icon}"></i>`;
	} else {
		/** common image/icon could be added for new options */
	}
	
	return `${prefix}${data.label}`;
}

VirtualSelect.init({
	ele: '#category-select',
	name: "category",
	options: [
		{ label: tableUtils_i18n.security, value: 'bezpieczeństwo', customData: { icon: "security-icon" } },
		{ label: tableUtils_i18n.ads, value: 'reklamy', customData: { icon: "ads-icon" } },
		{ label: tableUtils_i18n["anti-adblock"], value: 'anty-adblock', customData: { icon: "adblockDetect-icon"} },
		{ label: tableUtils_i18n.social, value: 'społecznościowe', customData: { icon: "socialCategory-icon" } },
		{ label: tableUtils_i18n.cookiesCategory, value: 'ciasteczka', customData: { icon: "sweetCategory-icon" } },
		{ label: tableUtils_i18n.annoyances, value: 'irytujące', customData: { icon: "annoyance-icon"} },
		{ label: "RSS", value: 'RSS', customData: { icon: "rssCategory-icon" } },
		{ label: tableUtils_i18n.sponsored, value: 'sponsorowane', customData: { icon: "sponsor-icon" } },
		{ label: tableUtils_i18n["e-commerce"], value: 'e-handel', customData: { icon: "ecommerce-icon" } },
		{ label: tableUtils_i18n.privacy, value: 'prywatność', customData: { icon: "privacy-icon"} },
	],
	dropboxWrapper: "#dropdown-container",
	labelRenderer: iconRenderer,
	maxWidth: "500px",
	placeholder: `${tableUtils_i18n.selectCategory}..`,
	multiple: true,
	noSearchResultsText: tableUtils_i18n.nothingFound,
	searchPlaceholderText: tableUtils_i18n.ui_search,
	optionsSelectedText: tableUtils_i18n.optionsSelected,
	optionSelectedText: tableUtils_i18n.optionSelected,
	allOptionsSelectedText: tableUtils_i18n.all,
	clearButtonText: tableUtils_i18n.clear,
	additionalButtonClasses: "btn btn-outline-primary"
});

VirtualSelect.init({
	ele: '#origin-select',
	name: "origin",
	options: [
		{ label: tableUtils_i18n.Polish, value: 'pl' },
		{ label: tableUtils_i18n.foreign, value: 'zagraniczne' },
	],
	dropboxWrapper: "#dropdown-container",
	maxWidth: "500px",
	placeholder: `${tableUtils_i18n.selectOrigin}..`,
	multiple: true,
	noSearchResultsText: tableUtils_i18n.nothingFound,
	searchPlaceholderText: tableUtils_i18n.ui_search,
	optionsSelectedText: tableUtils_i18n.optionsSelected,
	optionSelectedText: tableUtils_i18n.optionSelected,
	allOptionsSelectedText: tableUtils_i18n.all,
	clearButtonText: tableUtils_i18n.clear,
	additionalButtonClasses: "btn btn-outline-primary"
});

VirtualSelect.init({
	ele: '#adblocker-select',
	name: "adblocker",
	options: [
		{ label: "AdBlock", value: 'AB', customData: { icon: "AB-icon" } },
		{ label: "Adblock Plus", value: 'ABP', customData: { icon: "ABP-icon" }  },
		{ label: "uBlock Origin", value: 'uBO', customData: { icon: "uBO-icon" }  },
		{ label: "AdGuard", value: 'AG', customData: { icon: "AG-icon" }  },
		{ label: "Pi-hole", value: 'Ph', customData: { icon: "Ph-icon" }  },
		{ label: "Dnsmasq", value: 'Dmq', customData: { icon: "Dmq-icon" }  },
		{ label: "FortiGate", value: 'FG', customData: { icon: "FG-icon" }  },
		{ label: "AdAway", value: 'hosts', customData: { icon: "AA-icon" }  },
		{ label: "Blokada", value: 'hosts', customData: { icon: "Blokada-icon" }  },
		{ label: "AdGuard Home", value: 'hosts', customData: { icon: "AGHome-icon" }  },
		{ label: "Diversion", value: 'hosts', customData: { icon: "Diversion-icon" }  },
		{ label: "pfBlockerNG", value: 'hosts', customData: { icon: "pf-icon" }  },
		{ label: "personalDNSFilter", value: 'hosts', customData: { icon: "pDF-icon" }  },
	],
	dropboxWrapper: "#dropdown-container",
	maxWidth: "500px",
	labelRenderer: iconRenderer,
	placeholder: `${tableUtils_i18n.selectAdblocker}..`,
	noSearchResultsText: tableUtils_i18n.nothingFound,
	searchPlaceholderText: tableUtils_i18n.ui_search,
	optionsSelectedText: tableUtils_i18n.optionsSelected,
	optionSelectedText: tableUtils_i18n.optionSelected,
	allOptionsSelectedText: tableUtils_i18n.all,
	clearButtonText: tableUtils_i18n.clear,
	additionalButtonClasses: "btn btn-outline-primary"
});

VirtualSelect.init({
	ele: '#lists-select',
	name: "hash",
	options: [
		{{ range $.Site.Data.FilterLists.items }}
			{{ $id := trim .title "* " | replaceRE "(\\s)" "_" | replaceRE "'" "" | lower }}
			{ value: "{{ $id | md5 }}", label: "{{ trim .title "* "}}"},
		{{end}}
	],
	dropboxWrapper: "#dropdown-container",
	maxWidth: "500px",
	placeholder: `${tableUtils_i18n.selectFavoriteLists}..`,
	multiple: true,
	noSearchResultsText: tableUtils_i18n.nothingFound,
	searchPlaceholderText: tableUtils_i18n.ui_search,
	optionsSelectedText: tableUtils_i18n.optionsSelected,
	optionSelectedText: tableUtils_i18n.optionSelected,
	allOptionsSelectedText: tableUtils_i18n.all,
	clearButtonText: tableUtils_i18n.clear,
	additionalButtonClasses: "btn btn-outline-primary"
});

// replaceAll polyfill
if (String.prototype.replaceAll == undefined) {
	String.prototype.replaceAll = function(search, replacement) {
		var target = this;
		return target.replace(new RegExp(search, 'g'), replacement);
	};
}

// Filtering table
var selectObjects = document.querySelectorAll('.ddlFilterTableRow');
for (selectObject of selectObjects) {
	selectObject.addEventListener('change', function () {
		var rows = document.querySelectorAll(".Row");
		for (row of rows) {
			row.classList.add("d-none");
		}
		var critriaAttributes = [];
		var allSelects = document.querySelectorAll(".ddlFilterTableRow");
		for (var singleSelect of allSelects) {
			var hiddenInput = singleSelect.querySelector('.vscomp-hidden-input');
			if (hiddenInput) {
				var dataAttribute = hiddenInput.name;
				var options = singleSelect.getSelectedOptions();
				var allValues = [];
				if (options !== undefined) {
					if (options.length != undefined) {
						for (option of options) {
							allValues.push(option.value);
						}
					}
					else {
						allValues.push(options.value);
					}
				}
				const url = new URL(location);
				if(allValues != "") {
					allValues = allValues.toString();
					url.searchParams.set(dataAttribute, allValues);
					if (allValues.includes(",")){
						var startDataAttribute = `[data-${dataAttribute}*="`;
						var endDataAttribute = '"]';
						critriaAttributes.push(startDataAttribute+allValues.replaceAll(",", endDataAttribute + ',' + startDataAttribute)  + endDataAttribute);
					}
					else {
						critriaAttributes.push(`[data-${dataAttribute}*="${allValues}"]`)
					}
				}
				else {
					url.searchParams.delete(dataAttribute);
				}
				history.replaceState(null, '', url.href);
			}
		}
		var allRecords = rows;
		for (critriaAttribute of critriaAttributes) {
			allRecords = [...allRecords].filter(y => {
				return y.matches(critriaAttribute);
			});
		}
		for (record of allRecords) {
			record.classList.remove("d-none");
		}
	});
}

function offset(el) {
	if (!el.getClientRects())
	{
		return { top: 0, left: 0 };
	}
	const rect = el.getBoundingClientRect()
	return {
		top: rect.top + window.scrollY,
		left: rect.left + window.scrollX,
	}
}

function scrollPaddingTop(target) {
	window.scrollTo({top: 0, behavior: 'smooth'});
	if (window.getComputedStyle(document.querySelector("nav")).getPropertyValue('position') == 'fixed') {
		if (typeof offset(target) !== 'undefined') {
			smoothScrollTo({
				top: offset(target).top - document.querySelector('nav').offsetHeight,
				duration: 5,
			})
		}
	}
}

var faLinks = document.querySelectorAll(".fa-link");
for (var faLink of faLinks) {
	faLink.addEventListener('click', function () {
		scrollPaddingTop(document.querySelector(decodeURIComponent(this.getAttribute("href"))));
	});
}
window.addEventListener('load', () => {
	var target = document.querySelector(':target');
	if (target != null) {
		scrollPaddingTop(document.querySelector(':target'));
	}
	const urlParams = new URLSearchParams(window.location.search);
	let key;
	var allSelects = document.querySelectorAll(".ddlFilterTableRow");
	for (var singleSelect of allSelects) {
		var hiddenInput = singleSelect.querySelector('.vscomp-hidden-input');
		if (hiddenInput) {
			key = urlParams.get(hiddenInput.name);
			if (key !== null) {
				singleSelect.setValue(key.split(","));
				singleSelect.dispatchEvent(new Event('change'));
			}
		}
	}
	key = urlParams.get("search");
	let searchField = document.querySelector(".light-table-filter");
	if (key !== null) 
	{
		searchField.setAttribute("value", key);
		searchField.dispatchEvent(new Event('input'));
	}
});


document.querySelector(".light-table-filter").addEventListener('input', function (e) {
	const url = new URL(location);
	if (this.value != '') {
		url.searchParams.set("search", this.value);
	} else {
		url.searchParams.delete("search");
	}
	history.replaceState(null, '', url.href);
});
