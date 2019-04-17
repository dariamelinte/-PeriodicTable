

var navNode = document.getElementById('nav-bar');

navNode.innerHTML =
`<ul class="mainmenu">
<li><a href="index.html" class="button"> Acasă </a></li>


<li><a href="#" class="button"> Tabelul periodic al elementelor </a>

    <ul class="submenu">

        <li><a href="istoric.html"       class="content"> Istoric  </a></li>
        <li><a href="table_page.html"    class="content"> Tabelul periodic al elementelor </a></li>
        <li><a href="proprietati.html"   class="content"> Proprietăți </a></li>
        <li><a href="mendeleev.html"     class="content border"> Legile lui Mendeleev  </a></li>

    </ul>

</li>


<li><a href="#" class="button"> Chimia corpului uman </a>

    <ul class="submenu">

        <li><a href="" class="content"> submenu 1  </a></li>
        <li><a href="" class="content"> submenu 2  </a></li>
        <li><a href="" class="content"> submenu 3  </a></li>
        <li><a href="" class="content border"> submenu 4  </a></li>

    </ul>
</li>

<li><a href="bibliografie.html"         class="button"> Bibliografie </a></li>

<li><a href="contact.html"              class="button"> Contact </a></li>
</ul>`