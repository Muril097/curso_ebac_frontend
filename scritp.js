$(document).ready(function(){
    $('#confirma').click(function(){
        $('.lista').slideDown();
        
    })

    $('#reseta').click(function(){
        $('.lista').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        check();
        const tarefa = $('#tarefa').val();
        const hora = $('#data-tarefa').val();
        const novoItem = $('<li></li>');
        $(`<p>${tarefa}</p>`).appendTo(novoItem);
        const novoTempo = $('<li></li>');
        $(`<p>${hora}</p>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $('#tarefa').val('')
    })

    $('p').click(function(){
        $('li').addClass('check');
    })
})
function check() {
    $("li").on("click", (e) => {
    $(e.target).addClass("check");
    });
}