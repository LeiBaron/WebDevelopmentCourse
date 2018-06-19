//אפקט גלילה
$(document).ready(function () {
    var scrollLink = $('.scroll');

    scrollLink.click(function (event) {
        event.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top - 70
        }, 1000)
    })

    
    //סימון מיקום בעמוד
    $(window).scroll(function () {
        var currentLocation = $(this).scrollTop();

        scrollLink.each(function () {

            var sectionOffset = $(this.hash).offset().top - 10;
            console.log(currentLocation)
            if (currentLocation >= 504 && currentLocation < 1715) {
                $("#Medactive").addClass('active1');
                $("#Bugsactive").removeClass('active1');
                $("#Pureactive").removeClass('active1');
                $("#Spicesactive").removeClass('active1');
                $("#Wayactive").removeClass('active1');
                $("#Aboutactive").removeClass('active2');
                $("#Contactactive").removeClass('active2');
                $("#Mapactive").removeClass('active2');
                document.title = "צמח+ - צמחי מרפא";
            }
            else if (currentLocation >= 1715 && currentLocation < 2860) {
                $("#Bugsactive").addClass('active1');
                $("#Medactive").removeClass('active1');
                $("#Pureactive").removeClass('active1');
                $("#Spicesactive").removeClass('active1');
                $("#Wayactive").removeClass('active1');
                $("#Aboutactive").removeClass('active2');
                $("#Contactactive").removeClass('active2');
                $("#Mapactive").removeClass('active2');
                document.title = "צמח+ - צמחים נגד חרקים";

            }
            else if (currentLocation >= 2860 && currentLocation < 4020) {
                $("#Pureactive").addClass('active1');
                $("#Bugsactive").removeClass('active1');
                $("#Medactive").removeClass('active1');
                $("#Spicesactive").removeClass('active1');
                $("#Wayactive").removeClass('active1');
                $("#Aboutactive").removeClass('active2');
                $("#Contactactive").removeClass('active2');
                $("#Mapactive").removeClass('active2');
                document.title = "צמח+ - צמחים מטהרים";

            }
            else if (currentLocation >= 4020 && currentLocation < 5211) {
                $("#Spicesactive").addClass('active1');
                $("#Bugsactive").removeClass('active1');
                $("#Pureactive").removeClass('active1');
                $("#Medactive").removeClass('active1');
                $("#Wayactive").removeClass('active1');
                $("#Aboutactive").removeClass('active2');
                $("#Contactactive").removeClass('active2');
                $("#Mapactive").removeClass('active2');
                document.title = "צמח+ - צמחי תבלין";

            }
            else if (currentLocation >= 5211 && currentLocation < 5842) {
                $("#Wayactive").addClass('active1');
                $("#Bugsactive").removeClass('active1');
                $("#Pureactive").removeClass('active1');
                $("#Spicesactive").removeClass('active1');
                $("#Medactive").removeClass('active1');
                $("#Aboutactive").removeClass('active2');
                $("#Contactactive").removeClass('active2');
                $("#Mapactive").removeClass('active2');
                document.title = "צמח+ - בדרך למשתלה";

            }
            else if (currentLocation >= 5842 && currentLocation < 6838) {
                $("#Aboutactive").addClass('active2');
                $("#Bugsactive").removeClass('active1');
                $("#Pureactive").removeClass('active1');
                $("#Spicesactive").removeClass('active1');
                $("#Wayactive").removeClass('active1');
                $("#Medactive").removeClass('active1');
                $("#Contactactive").removeClass('active2');
                $("#Mapactive").removeClass('active2');
                document.title = "צמח+ - אודות";
            }
            else if (currentLocation >= 6838 && currentLocation < 7244) {
                $("#Contactactive").addClass('active2');
                $("#Bugsactive").removeClass('active1');
                $("#Pureactive").removeClass('active1');
                $("#Spicesactive").removeClass('active1');
                $("#Wayactive").removeClass('active1');
                $("#Aboutactive").removeClass('active2');
                $("#Medactive").removeClass('active1');
                $("#Mapactive").removeClass('active2');
                document.title = "צמח+ - צור קשר";
            }
            else if (currentLocation >= 7244) {
                $("#Mapactive").addClass('active2');
                $("#Bugsactive").removeClass('active1');
                $("#Pureactive").removeClass('active1');
                $("#Spicesactive").removeClass('active1');
                $("#Wayactive").removeClass('active1');
                $("#Aboutactive").removeClass('active2');
                $("#Contactactive").removeClass('active2');
                $("#Medactive").removeClass('active1');
                document.title = "צמח+ - מפת אתר";
            }
            else {
                $("#Medactive").removeClass('active1');
                $("#Bugsactive").removeClass('active1');
                $("#Pureactive").removeClass('active1');
                $("#Spicesactive").removeClass('active1');
                $("#Wayactive").removeClass('active1');
                $("#Aboutactive").removeClass('active2');
                $("#Contactactive").removeClass('active2');
                $("#Mapactive").removeClass('active2');
                document.title = "צמח+";
                
            }

        })
    })

    $(window).scroll(function () {
        var currentLocation = $(this).scrollTop();

        scrollLink.each(function () {

            var sectionOffset = $(this.hash).offset().top - 10;
            console.log(currentLocation)
            if (currentLocation >= 200 && currentLocation < 465) {
                $(".fade1").addClass('Opa');
            }
            else if (currentLocation >= 465 && currentLocation < 865) {
                $(".fade2").addClass('Opa');
                $(".fade2_1").addClass('Opa');
           //להמשיך
            }
            else if (currentLocation >= 865 && currentLocation < 1333) {
                $(".fade3").addClass('Opa');
                $(".fade3_1").addClass('Opa');           
            }
            else if (currentLocation >= 1333 && currentLocation < 1672) {
                $(".fade4").addClass('Opa');
                                
                            }
            else if (currentLocation >= 1672 && currentLocation < 2050) {
                $(".fade5").addClass('Opa');
                $(".fade5_1").addClass('Opa');
               
                            }
            else if (currentLocation >= 2050 && currentLocation < 2515) {
                $(".fade6").addClass('Opa');
                $(".fade6_1").addClass('Opa');
          
            }
            else if (currentLocation >= 2515 && currentLocation < 2910) {
                $(".fade7").addClass('Opa');
                
             
            }
            else if (currentLocation >= 2910 && currentLocation < 3292) {
                $(".fade8").addClass('Opa');
                $(".fade8_1").addClass('Opa');
  
            }
            else if(currentLocation >= 3292 && currentLocation < 3700) {
                $(".fade9").addClass('Opa');
                $(".fade9_1").addClass('Opa');
            }
                //להמשיך
            else if (currentLocation >= 3700 && currentLocation < 3965) {
                $(".fade10").addClass('Opa');
                
            }
            else if (currentLocation >= 3965 && currentLocation < 4525) {
                $(".fade11").addClass('Opa');
                $(".fade11_1").addClass('Opa');
            }
            else if (currentLocation >= 4525 && currentLocation < 4910) {
                $(".fade12").addClass('Opa');
                $(".fade12_1").addClass('Opa');
                
            }
            else if (currentLocation >= 4910 && currentLocation < 5060) {
                $(".fade13").addClass('Opa');
                
            }
            else if (currentLocation >= 5060 && currentLocation < 5163) {
                $(".fade14").addClass('Opa');
                
            }
            else if (currentLocation >= 5163 && currentLocation < 5224) {
                $(".fade15").addClass('Opa');
            }
            else if (currentLocation >= 5224 && currentLocation < 6224) {
                $(".fade16").addClass('Opa');
            }

            
        })
    })

})


//הופעה של גלול מעלה
function scroller() {
    var scrollUp = document.getElementById("scrollup");

    if (window.pageYOffset >= 150) {
        scrollUp.classList.add("scrollupShow");
    }
    else {
        scrollUp.classList.remove("scrollupShow");
    }
}

//הופך את תפריטי הניווט לאטומים לאחר גלילה
function opaqueNav() {
    var Nav2 = document.getElementById("nav2");
    var Nav1 = document.getElementById("nav1");

    if (window.pageYOffset >= 50) {
        Nav2.classList.add("Nav2Opacity");
        Nav1.classList.add("Nav1Opacity");
    }
    else {
        Nav2.classList.remove("Nav2Opacity");
        Nav1.classList.remove("Nav1Opacity");
    }
}

function MyFuncs() {
    scroller();
    opaqueNav();
}

