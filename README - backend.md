<p style="text-align: center;"><strong><u><span style="font-size: 14.0pt; line-height: 107%;">Alkalmaz&aacute;sok fejleszt&eacute;se</span></u></strong></p>
<p style="text-align: center;"><strong><u><span style="font-size: 14.0pt; line-height: 107%;">Backend megval&oacute;s&iacute;tsa - dokument&aacute;ci&oacute;</span></u></strong></p>
<p>&nbsp;</p>
<p><strong><u>Fejlesztői k&ouml;rnyezet bemutat&aacute;sa</u></strong></p>
<p>Az alkalmaz&aacute;s egy Java nyelven, Spring Boot (1.5.8) keretrendszerben &iacute;r&oacute;dott, MVC architekt&uacute;r&aacute;j&uacute; Maven projekt. A program &aacute;ltal haszn&aacute;lt dependenci&aacute;k, t&ouml;bbek k&ouml;z&ouml;tt JPA, H2 (adatb&aacute;zis), Devtools, Lombok, Thymeleaf.</p>
<p>&nbsp;</p>
<p><strong><u>T&aacute;bl&aacute;k adatkapcsolati diagrammgja</u></strong></p>
<p>Az uml a k&ouml;vetkező linken &eacute;rhető el:<br /> <a href="https://github.com/mfridaa/alkfejl/blob/master/database.png">https://github.com/mfridaa/alkfejl/blob/master/database.png</a></p>
<p>&nbsp;</p>
<p><strong><u>Alkalmazott k&ouml;nyvt&aacute;rstrukt&uacute;ra</u></strong></p>
<p>Az MVC architekt&uacute;ra logik&aacute;ja alapj&aacute;n &eacute;p&uuml;l fel az alkalmaz&aacute;s k&ouml;nyvt&aacute;rstrukt&uacute;r&aacute;ja. A projekt az oszt&aacute;lyok funkci&oacute;j&aacute;nak megfelelően &nbsp;package-ekre &nbsp;van osztva, a k&ouml;vetkező f&eacute;le k&eacute;ppen:</p>
<ul>
<li style="margin-left: 18.0pt; text-indent: -18.0pt;">Source packages:
<ul>
<li style="margin-left: 54.0pt; text-indent: -18.0pt;">Fők&ouml;nyvt&aacute;r: hu.elte.alkfejl (ez tartalmazza a main class-t, azaz AlkfejlApplication.java)</li>
<li style="margin-left: 54.0pt; text-indent: -18.0pt;">Controllerek: hu.elte.alkfejl.controller</li>
<li style="margin-left: 54.0pt; text-indent: -18.0pt;">Repository-k: hu.elte.alkfejl.repository</li>
<li style="margin-left: 54.0pt; text-indent: -18.0pt;">Entity-k: elte.alkfejl.entity</li>
<li style="margin-left: 54.0pt; text-indent: -18.0pt;">Saj&aacute;t annot&aacute;ci&oacute;k implement&aacute;ci&oacute;ja: elte.alkfejl.annotation</li>
<li style="margin-left: 54.0pt; text-indent: -18.0pt;">Interceptor: elte.alkfejl.interceptor</li>
<li style="margin-left: 54.0pt; text-indent: -18.0pt;">Service: elte.alkfejl.service (pl &nbsp;User session: Session.java)</li>
</ul>
</li>
</ul>
<p><br /> </p>
