
var navNode = document.getElementById('nav-bar');

navNode.innerHTML =
`<ul>
<li><a href="index.html" class="button"> Acasă </a></li>


<li><a href="#" class="button"> Tabelul periodic al elementelor </a>

    <ul class="submenu">

        <li><a href="istoric.html"> Istoric  </a></li>
        <li><a href="table_page.html"> Tabelul periodic al elementelor </a></li>
        <li><a href="proprietati.html" class="border"> Proprietăți </a></li>

    </ul>

</li>


<li><a href="#" class="button"> Chimia corpului uman </a>

    <ul class="submenu">

        <li><a href="elementele_corpului_uman.html"> Elementele corpului uman</a></li>
        <li><a href="minerale_si_vitamine.html"> Minerale si Vitamine  </a></li>
        <li><a href=""> Proteine  </a></li>
        <li><a href="lipide.html"> Lipide  </a></li>
        <li><a href="glucide.html"> Glucide  </a></li>
        <li><a href="apa.html" class="border"> Apa  </a></li>

    </ul>
</li>

<li><a href="bibliografie.html"         class="button"> Bibliografie </a></li>

<li><a href="contact.html"              class="button"> Contact </a></li>
</ul>`