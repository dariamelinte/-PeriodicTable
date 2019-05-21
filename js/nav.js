
var navNode = document.getElementById('nav-bar');

navNode.innerHTML =
`<ul>
<li><a href="index.html" class="button"> Acasă </a></li>


<li><a href="table_page.html" class="button"> Tabelul periodic </a></li>


<li><a href="#" class="button"> Chimia corpului uman </a>

    <ul class="submenu">

        <li><a href="elementele_corpului_uman.html"> Elementele corpului uman</a></li>
        <li><a href="minerale_si_vitamine.html"> Minerale si Vitamine  </a></li>
        <li><a href="proteine.html"> Proteine  </a></li>
        <li><a href="lipide.html"> Lipide  </a></li>
        <li><a href="glucide.html"> Glucide  </a></li>
        <li><a href="apa.html" class="border"> Apa  </a></li>

    </ul>
</li>

<li><a href="#" class="button"> Verifică-ți cunoștințele ! </a>

    <ul class="submenu">

        <li><a href="test1.html"> Testul 1 </a></li>
        <li><a href="test2.html"> Testul 2 </a></li>
        <li><a href="test3.html" class="border"> Testul 3 </a></li>
    
    </ul>
</li>

<li><a href="analize.html" class="button"> Verifică-ți analizele ! </a></li>

<li><a href="bibliografie.html"         class="button"> Bibliografie </a></li>

<!--<li><a href="contact.html"              class="button"> Contact </a></li>-->
</ul>`