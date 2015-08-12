        $(document).ready(function () {

            $('.burger a').mouseover(function () {
                $(this).vibrate();
            });

            $(".burger").click(function () {
                $(".mobilenav").fadeToggle(500);
                $(".top-menu").toggleClass("top-animate");
                $(".mid-menu").toggleClass("mid-animate");
                $(".bottom-menu").toggleClass("bottom-animate");
                return false;
            });


        });



        (function (i, s, o, g, r, a, m) {
            i['GoogleAnalyticsObject'] = r;
            i[r] = i[r] || function () {
                (i[r].q = i[r].q || []).push(arguments)
            }, i[r].l = 1 * new Date();
            a = s.createElement(o),
            m = s.getElementsByTagName(o)[0];
            a.async = 1;
            a.src = g;
            m.parentNode.insertBefore(a, m)
        })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

        ga('create', 'UA-66070213-2', 'auto');
        ga('send', 'pageview');