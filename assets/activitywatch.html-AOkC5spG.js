import{_ as r}from"./AW-D3Vr5fx5.js";import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,o as c,c as s,a as e,b as t,d as p,e as o}from"./app-DlDwmOE_.js";const l={},g=o('<p>ActivityWatch - трекер времени на Windows (и на Андроид но так се). Оно помогает максимально честно считать количество затраченного на задачи времени, потому что в отличии от прочих приложений, где ты сам ставишь таймер, если ты отвлекаешься - время не считается. Мне помогает следить за собой, мотивировать себя меньше заниматься херней и отвлекаться. НЕ использовать людям с ОКР. Считывает названия приложений, окон и вкладок в браузере, собирает статистику, которую изображает в красивых графиках по категориям, который вы создали. Оно опенсорс и работает локально, никто ваши данные не украдет. Главный минус - нет имплементации синхронизации между девайсами.</p><figure><img src="'+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><hr><h2 id="установка" tabindex="-1"><a class="header-anchor" href="#установка"><span>Установка</span></a></h2><p>Для установки скачайте приложение (https://activitywatch.net/) и расширение (https://chromewebstore.google.com/detail/activitywatch-web-watcher/nglaklhklhcoonedhgnpgddginnjdadi) для браузера(ов) После установки откройте Dashboard через иконку AW в трее. Прежде чем настраивать приложение, удобнее всего сначала день попользоваться приложением, чтобы он собрал данные.</p><h2 id="настроика-и-использование" tabindex="-1"><a class="header-anchor" href="#настроика-и-использование"><span>Настройка и использование</span></a></h2><p>Сначала все понятно, Landing page удобнее всего иметь на Home.</p><h3 id="categorization" tabindex="-1"><a class="header-anchor" href="#categorization"><span>Categorization</span></a></h3>',8),d={href:"https://docs.activitywatch.net/en/latest/features/categorization.html",target:"_blank",rel:"noopener noreferrer"},h=o("<p>Категорию самого &quot;высокого&quot; уровня можно создать через кнопку <strong>New Category</strong> снизу, но категории внутри категорий (подкатегорию) удобнее добавлять через плюсик справа от категории, внутри которой вы хотите создать подкатегорию. При создании категории открывается меню:</p><p><strong>Name:</strong> - Название, лишь эстетический элемент, отображается на <strong>Dashboard</strong></p><p><strong>Parent:</strong> - Категория, к которой категория относится. Если нажали плюсик, она автоматически выбирается.</p><p><strong>Type:</strong></p><p><strong>None</strong> - пустая категория.</p><p><strong>Regular Expression</strong> - текст, который вы хотите, чтобы засчитывался в категорию. Они работают через RegEx, что понятно. Для не знающих, это способ дать компьютеру понять, как взаимодействия с текстом. Например ^Settings$ будет считать лишь то, что полностью совпадает с Settings, <code>|</code> позволяет использовать разные паттерны в одной категории, например одновременно VK и Telegram будет <strong>VK</strong>|<strong>Telegram</strong>. Т.к программа использует синтаксис <strong>RegEx</strong>, нельзя просто вбивать<code> . , + * ? $ ^ { } ( )</code>, их нужно помещать в квадратные скобки: <code>Японский[.] Фигня</code> или целиком выражение <code>[Японский. Фигня]</code> но в этом скорее всего не будет необходимости.</p><p><strong>Ignore Case</strong>- игнорировать ли регистр (большие/маленькие буквы).</p><p><strong>Inherit Parent Color</strong> - копировать цвет категории выше. Если выключить, можно выбрать любой цвет самому.</p><p>Теперь обращу внимание на приоритет категорий. Если строка совпадает с <strong>Regular Expression</strong> более чем одной категории, то сначала приоритет идет к самой &quot;глубокой&quot; категории, потом к той, которая выше в списке (создана ранее). Например (в квадратных скобках выражение):</p><p>Вы открыли страницу про визуальную новеллу Bebra228 на сайте VNDB, а также вы играли в игру Bebra228. У вас появились <strong>Applications</strong> и <strong>Window Titles</strong> <code>Bebra228 - VNDB</code> и <code>Bebra228.exe</code>. У вас категории как ниже: Японский</p><p>├── Браузер[VNDB] ├── Аниме ├── Чтение └── ВН └── Bebra228.exe</p><p>В таком случае, Обе строчки перейдут в категорию <strong>ВН</strong>, т.к она &quot;глубже&quot;, несмотря на то, что <strong>VNDB</strong> выше. Если же будет так:</p><p>├── Браузер[VNDB] ├── Аниме ├── Чтение ├── ВН └── Bebra228.exe</p><p>то <code>Bebra228 - VNDB</code> перейдет в категорию <strong>VNDB</strong>, а <code>Bebra228.exe </code>в <code>ВН</code></p><p>Категории можно создавать как полностью в ручную, так и через Category Builder, что удобно, потому что не нужно вводить названия в ручную и он сам предложит не категоризированные. Не забывайте сохранять изменения! Также, на всякий случай, экспортите настройки, если они сбросятся случайно - неприятно будет.</p><p>О том, как он считает время, есть только 2 момента.</p><ol><li>Если больше 3 минут нет взаимодействия с компьютером, он считает это за AFK и не будет считать этот промежуток времени (включая 3 минуты).</li><li>Если приложение не требует воздействия (видео, Дискорд и подобные), то либо он будет засчитывать если это медиа (чаще всего, не всегда. MPV и YouTube понимает, подкасты нет), либо не будет. В таком случае можно внести строчку в Always count as active pattern в настройках. Если их несколько, также используйте |.</li></ol><p>БОНУС: категория, которая будет захватывать рандомную фигню на японском. Я просто попросил ии дать мне всю кану и 100 распространенных кандзи. Удобно. <code>あ|い|う|え|お|か|き|く|け|こ|さ|し|す|せ|そ|た|ち|つ|て|と|な|に|ぬ|ね|の|は|ひ|ふ|へ|ほ|ま|み|む|め|も|や|ゆ|よ|ら|り|る|れ|ろ|わ|を|ん|ア|イ|ウ|エ|オ|カ|キ|ク|ケ|コ|サ|シ|ス|セ|ソ|タ|チ|ツ|テ|ト|ナ|ニ|ヌ|ネ|ノ|ハ|ヒ|フ|ヘ|ホ|マ|ミ|ム|メ|モ|ヤ|ユ|ヨ|ラ|リ|ル|レ|ロ|ワ|ヲ|ンア|イ|ウ|エ|オ|カ|キ|ク|ケ|コ|サ|シ|ス|セ|ソ|タ|チ|ツ|テ|ト|ナ|ニ|ヌ|ネ|ノ|ハ|ヒ|フ|ヘ|ホ|マ|ミ|ム|メ|モ|ヤ|ユ|ヨ|ラ|リ|ル|レ|ロ|ワ|ヲ|ン|一|二|三|四|五|六|七|八|九|十|百|千|万|円|時|分|今|何|人|名|外|学|校|会|社|手|電|話|車|本|日|月|火|水|木|金|土|曜|年|間|前|後|午|半|大|小|多|少|早|遅|男|女|子|父|母|兄|姉|弟|妹|家|店|食|飲|行|来|見|聞|読|書|買|持|待|切|開|閉|出|入|立|座|話|聞|答|話|読|書|歌|遊|勉|習|休|仕|事|休|昼|夜|朝|晩|年|月|日|時|分|間|週|今|朝|昨|晩|明|明|明|後|夜</code></p>",18);function m(u,y){const a=i("ExternalLinkIcon");return c(),s("div",null,[g,e("p",null,[t('Тут нужно создавать группы и давать "правила" по которым программа причисляет окна к группам. Суть можно понять по дефолтным настройкам либо в '),e("a",d,[t("официальной документации"),p(a)]),t(", но суть я объясню вкратце:")]),h])}const _=n(l,[["render",m],["__file","activitywatch.html.vue"]]),b=JSON.parse('{"path":"/software/activitywatch.html","title":"Activitywatch","lang":"ru-RU","frontmatter":{"Author":null,"title":"Activitywatch","shortTitle":"Activitywatch","description":"Программа для отслеживания времени на ПК и Android.","icon":"/ico/aw.png","category":["иснтрументы"],"tag":["учет времени"],"Date":null,"ReadingTime":null,"order":8,"head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://vuepress-theme-hope-docs-demo.netlify.app/en/software/activitywatch.html"}],["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/software/activitywatch.html"}],["meta",{"property":"og:site_name","content":"NeonGoo.Ru"}],["meta",{"property":"og:title","content":"Activitywatch"}],["meta",{"property":"og:description","content":"Программа для отслеживания времени на ПК и Android."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://vuepress-theme-hope-docs-demo.netlify.app/imgvid/AW.jpg"}],["meta",{"property":"og:locale","content":"ru-RU"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-04-03T15:50:34.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Activitywatch"}],["meta",{"property":"article:author","content":"NeonGooRoo"}],["meta",{"property":"article:tag","content":"учет времени"}],["meta",{"property":"article:modified_time","content":"2024-04-03T15:50:34.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Activitywatch\\",\\"image\\":[\\"https://vuepress-theme-hope-docs-demo.netlify.app/imgvid/AW.jpg\\"],\\"dateModified\\":\\"2024-04-03T15:50:34.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"NeonGooRoo\\",\\"url\\":\\"https://t.me/neongooroo\\"}]}"]]},"headers":[{"level":2,"title":"Установка","slug":"установка","link":"#установка","children":[]},{"level":2,"title":"Настройка и использование","slug":"настроика-и-использование","link":"#настроика-и-использование","children":[{"level":3,"title":"Categorization","slug":"categorization","link":"#categorization","children":[]}]}],"git":{"createdTime":1710247179000,"updatedTime":1712159434000,"contributors":[{"name":"NeonGooRoo","email":"neongooroo@gmail.com","commits":5}]},"readingTime":{"minutes":2.51,"words":754},"filePathRelative":"software/activitywatch.md","localizedDate":"12 марта 2024 г.","excerpt":"<p>ActivityWatch - трекер времени на Windows (и на Андроид но так се). Оно помогает максимально честно считать количество затраченного на задачи времени, потому что в отличии от прочих приложений, где ты сам ставишь таймер, если ты отвлекаешься - время не считается. Мне помогает следить за собой, мотивировать себя меньше заниматься херней и отвлекаться. НЕ использовать людям с ОКР. Считывает названия приложений, окон и вкладок в браузере, собирает статистику, которую изображает в красивых графиках по категориям, который вы создали. Оно опенсорс и работает локально, никто ваши данные не украдет. Главный минус - нет имплементации синхронизации между девайсами.</p>"}');export{_ as comp,b as data};