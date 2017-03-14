'use strict';
angular.module('users')
    .service('userService', UserService);
    /**
     * Users DataService
     * @returns {{loadAll: Function}}
     *@constructor
     */
function UserService($q) {
    var users = {
        name: 'Jhon Dude',
        avatar: 'svg-1',
        content: 'Este é Jhon Dude. Ele não gosta de nada, mas sabe qualquer coisa. Foi encontrado flutuando no Oceano Pacífico em um pedaço de madeira completamente nú por uma tripulação Indonesiana. Apesar de sua aparência ocidental ele sabia falar fluentemente a língua local dos pescadores. Alías, ele fala qualquer língua de qualquer lugar do mundo.'
    },
    {
        name: 'Ana Hickmman',
        avatar: 'svg-2',
        content: 'Muito famosa, muito bonita, tem muita classe. Mas também apresenta um programa de TV vulgar pra cacete, deu o golpe no Marido milionário e também ficou de Kaô com um maluco que tentou matar ela num hotel de luxo e o cunhado é que levou a pior e tomou um tiro no peito mas tá vivo o cagado.'
    },
    {
        name: 'Ishikavagima Santos',
        avatar: 'svg-3',
        content: 'É Brasileiro mas tem nome japonês. É um nome bastante estranho mas infelizmente é o nome que o pai deu pra ele. Na escola, quando era pequeno era muito zuado e chamavam ele de Istica Vagina mas depois de mais velho isso fez dele um pegador de marca maior. Hoje é metrosexual e tem sérias tendências a super-ego.'
    },
    {
        name: 'Simijanomuro Kai',
        avatar: 'svg-4',
        content: 'Nem precisa falar nada né. Esse ai nunca consegue aliviar no muro de algum conhecido porque sempre vem a piadinha e ai começa a rir e se mija todo. Na verdade não tem quase poder de fogo nenhum. As meninas dizem que nem sabem como ele consegue mijar sem molhar a calça de tão perto que fica do corpo o final da máquina de mijar.'
    },
    
};
