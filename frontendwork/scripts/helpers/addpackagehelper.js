const packageGenerator=(
    function(){
        function PackageHtml(params) {
            return packageFormer(params)
        }

       function packageFormer(params) {            
            let pkgid=params && params.packageid?params.packageid: create_UUID(),
            title=params && params.title?params.title:undefined,
            price=params && params.price?params.price:undefined,
            inclusion=params && params.inclusions?params.inclusions:undefined,
            accomodation=params && params.accomodation?params.accomodation:undefined,
            daydesc=params && params.daydescription?params.daydescription:undefined

            let packageHTML="<fieldset id='"+pkgid+"'>"        
            packageHTML+="<table><tbody>"
            packageHTML+="<tr><td>Display Image : </td><td>"+getImageControl(pkgid)+"</td></tr>"
            packageHTML+="<tr><td>Image Listings : </td><td>"+getFileUploadControl(pkgid)+"</td></tr>"
            packageHTML+="<tr><td>Title : </td><td>"+getPackageTitleControls(pkgid,title)+"</td></tr>"
            packageHTML+="<tr><td>Price : </td><td>"+getPackagePriceControls(pkgid,price)+"</td></tr>"
            packageHTML+="<tr><td>Inclusions : </td><td><fieldset><div id='pkginclusion_"+pkgid+"'>"+getPackageInclusionControls(inclusion)+"</div><button class='addinclusion'>+</button></fieldset></td></tr>"
            packageHTML+="<tr><td>Accomodations : </td><td><fieldset><div id='pkgaccomodations_"+pkgid+"'>"+getAccomodationControls(accomodation)+"</div><button class='addaccomodation'>+</button></fieldset></td></tr>"
            packageHTML+="<tr><td>Daywise Description : </td><td><fieldset><div id='pkgdaywisedescription_"+pkgid+"'>"+getPackageDayWiseDescriptionControls(daydesc)+"</div><button class='addday'>+</button></fieldset></td></tr>"
            packageHTML+="</tbody></table>"
            //packageHTML+="<button class='removePackage'>Remove</button>"
            packageHTML+="</fieldset>"
            return packageHTML
        }

        function getFileUploadControl(params,val) {
            if (val) {
                return "<input type='file' multiple id='pkgfileupload_"+params+"' class='fileuploadcontrol' value='"+val+"'/>"
            } 
            return "<input type='file' multiple id='pkgfileupload_"+params+"' class='fileuploadcontrol'/>"
        }

        function getPackageTitleControls(params,val) {
            if (val) {
                return "<input type='text' data-package-title='packageTitle' id='pkgtitle_"+params+"' value='"+val+"'/>"
            }
            return "<input type='text' data-package-title='packageTitle' id='pkgtitle_"+params+"'/>"
        }

        function getPackagePriceControls(params,val) {
            if (val) {
                return "<input type='text' data-package-price='packagePrice' id='pkgprice_"+params+"' value='"+val+"'/>"
            } 
            return "<input type='text' data-package-price='packagePrice' id='pkgprice_"+params+"'/>"
        }

        function getPackageInclusionControls(val) {
            if (val && val.length!=0) {
                let html=""
                html+=val.map(function(d) {
                            return "<div><input type='text' data-package-inclusions='packageInclusions' value='"+d+"'/><button class='removeinc'>-</button><br></div>"
                      }).join('')
                return html
            }
            return "<div><input type='text' data-package-inclusions='packageInclusions'/><button class='removeinc'>-</button><br></div>"
        }

        function getAccomodationControls(val) {
            if (val && val.length!=0) {
                let html=""
                html+=val.map(function(d) {
                            return "<div><input type='text' data-package-accomodations='packageAccomodations' value='"+d+"'/><button class='removeinc'>-</button><br></div>"
                      }).join('')
                return html
            }
            return "<div><input type='text' data-package-accomodations='packageAccomodations'/><button class='removeinc'>-</button><br></div>"
        }

        function getPackageDayWiseDescriptionControls(val) {
            if (val && val.length!=0) {
                let html=""
                html+=val.map(function(d) {
                            return "<div><textarea placeholder='Day Description' >"+d+"</textarea><button class='removeinc'>-</button></div>"
                      }).join('')
                return html
            }
            return "<div><textarea placeholder='Day Description'></textarea><button class='removeinc'>-</button></div>"
        }

        function getImageControl(params) {
            return "<input type='file' id='pkgfileupload_"+params+"' class='displayimagecontrol'/>"
        }

        return{
            getNewPackageHTML:PackageHtml,
            addinclusion: getPackageInclusionControls,
            addaccomodation:getAccomodationControls,
            addday:getPackageDayWiseDescriptionControls
        }
    }()
)
