
var navNode = document.getElementById('nav-bar');

navNode.innerHTML =
`<ul>
<li><a href="index.html" class="button"> Acasă </a></li>


<li><a href="#" class="button"> Tabelul periodic al elementelor </a>

    <ul class="submenu">

        <li><a href="istoric.html"> Istoric  </a></li>
        <li><a href="table_page.html"> Tabelul periodic al elementelor </a></li>
        <li><a href="proprietati.html"> Proprietăți </a></li>
        <li><a class="border" href="mendeleev.html"> Legile lui Mendeleev  </a></li>

    </ul>

</li>


<li><a href="#" class="button"> Chimia corpului uman </a>

    <ul class="submenu">

        <li><a href=""> submenu 1  </a></li>
        <li><a href=""> submenu 2  </a></li>
        <li><a href=""> submenu 3  </a></li>
        <li><a href="" class="border"> submenu 4  </a></li>

    </ul>
</li>

<li><a href="bibliografie.html"         class="button"> Bibliografie </a></li>

<li><a href="contact.html"              class="button"> Contact </a></li>
</ul>`