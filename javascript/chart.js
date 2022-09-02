var $window = $(window);
function run(){
    var fname = arguments[0],
    aArgs = Array.prototype.slice.call(arguments,1);

    try{
        fname.apply(window, aArgs);
    }catch(err){

    }
}

function chart(){
    $('.b-skills').appear(function(){
        setTimeout(function(){
            $('.chart').easyPieChart({
                easing: 'easeOutElastic',
                delay: 3000,
                barColor: '#000000',
                scaleColor: false,
                lineWidth: 21,
                trackWidth: 21,
                size: 250,
                linecap: 'round',
                onStep: function(from, to, percent){
                    this.el.children[0].innerHTML = Math.round(percent)
                }
            })
        }, 150)
    })
}

$(document).ready(function(){
    run(chart)

    $(function(){
        $.scrollIt();
    });
})
