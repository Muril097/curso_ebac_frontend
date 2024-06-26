$(document).ready(function(){
    $('#confirma').click(function(){
        $('.lista').slideDown();
        
    })

    $('#reseta').click(function(){
        $('.lista').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();

        const tarefa = $('#tarefa').val();
        const hora = $('#data-tarefa').val();

        const novoItem = $('<li></li>');
        $(`<p>${tarefa} -- ${hora}</p>`).appendTo(novoItem) //até aqui está certo

        /* const novoTempo = $('<li></li>');
        $(`<p>${hora}</p>`).appendTo(novoItem);  essa parte não tinha nescessidade, dava para vincular a hora no item criado ascima

        $(novoItem).appendTo('ul'); errado */ 
        $("#lista-tarefas").append(novoItem); //correto

            $('#tarefa').val('')
            $('#data-tarefa').val('')

            check();
    })

    function check(){
        $('li')
            .off('click')
            .on('click', function() {
                $(this).toggleClass("check");
            })
    }

    //$('p').click(function(){
        //$('li').addClass('check'); errado
    //})
})
/*function check() {
    $("li").on("click", (e) => {
    $(e.target).addClass("check"); erradp
    });
}*/
