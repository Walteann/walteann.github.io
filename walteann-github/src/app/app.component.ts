import { Component, OnInit, AfterViewInit } from '@angular/core';
import { WOW } from 'wowjs/dist/wow.min';
import * as $ from 'jquery';
import Typed from 'typed.js';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {

    title = 'walteann-github';

    ngOnInit() {
        this.jqueryStart();
    }

    jqueryStart() {
        $(function () {
            const nav = $('#minhaNavbar');
            $(window).scroll(function () {
                if ($(this).scrollTop() > 150) {
                    nav.addClass('menu-fixo');

                    nav.removeClass('navbar-default');
                } else {

                    nav.removeClass('menu-fixo');
                }
            });

        });

        // efeito scroll
        $(document).ready(function () {
            $('.scroll').click(function (event) {
                event.preventDefault();
                $('html,body').animate({
                    scrollTop: $(this.hash).offset().top
                }, 800);
            });
        });

        document.addEventListener('DOMContentLoaded', function () {
            const opcoes = {
                strings: ['console.log^500(" Bem começado, metade feito ");^1500',
                    'printf^500(" Simplicidade: a arte de maximizar a quantidade de trabalho que não precisou ser feito. ");^1200',
                    'System.out.println^400(" Toda ação é antecedida por um pensamento. ");^1200',
                    'echo^400 " O que se pode fazer com PHP?^2000 Qualquer Coisa! ";^1700',
                    'console.writeline^400(" Se eu vi mais longe, foi por estar sobre ombros de gigantes. ");^1000',
                ],
                // typeSpeed: 0,
                loop: true,
                typeSpeed: 50,
                showCursor: true,
                backSpeed: 25

            };

            const typed = new Typed('.element', opcoes);
        });

    }

    ngAfterViewInit() {

        new WOW().init();

    }
}
