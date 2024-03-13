---
title: Субтитры
shortTitle: Сбутт
description: description
icon: "/ico/subtitles.svg"
category: 
 - category
tag:
 - tag1
 - tag2
Date: 08-03-2024
Tag: bruh
ReadingTime: 100 min.
---

Статья новая, если замечены ошибки или есть рекомендации, пишите [сюда](https://t.me/neongooru)



Для просмотра видеоконтента и майнинга, нам нужны будут, но но это не так просто. Найти субтитры не всегда получается, и даже если получается, в них присутствует лишнее форматирование и у них могут быть неправильные тайминги. Далее будет информация о том, как решить каждую из этих проблей

-----

 



## Subtitle Edit

**Subtitle Edit** это open-source программа для редактирования субтитров. Нам она нужна, чтобы избавляться от лишнего форматирования и скобок с фуриганой для удобного майнинга. Это необязательно, но бывает очень раздражает, когда не получается замайнить что-то, потому что слово разделено на 2 части скобками. Также, она может через OCR переводить форматы субтитров типа `.sup`.

### Установка

На официальном [GitHub](https://github.com/SubtitleEdit/subtitleedit/releases) скачиваете последнюю версию программы в архиве, вариант `SE***.zip` хранится в папочке, `SubtitleEdit-*.*.*-Setup.exe` это установщик, качайте какой хотите.

### Использование

Чтобы отформатировать сразу группу файлов, вам нужно нажать `Tools > Batch Convert`. Сначала нажимаем `Scan Folder` (если у вас субтитры в разных папках внутри папки, можно нажать `Include Sub Folders`) и выбираем папку с субтитрами. Отмечаем галочки как показано, после нажатия `Remove Text for HI`, выставляем там настройки как на втором скриншоте и можно нажимать `Convert`. Все!

Если вы скачали субтитры, и они отображаются не как текст, а как изображения, их можно попробовать перевести в текст. Откройте файл субтитров через `SubtitleEdit` и сразу же откроется `Import\OCR` меню. Вы можете выбрать **OCR** движок, **Tessaract** работает лучше всего на вашем устройстве, но лучший вариант - **Google Vision API**, 1000 токенов можно получить бесплатно и обработка происходит на облаке. После завершения обработки сохраняете как `.SRT`.

![](/imgvid/SubtitleEdit.png)

## Automatic Subtitle Retimer

Данная программа позволяет нам автоматически исправлять тайминги и\ИЛИ переименовывать файлы (удобно для **MPV**). Ей стоит пользоваться если тайминги меняются несколько раз за серию или постоянно разные, иначе проще вручную и вы можете сделать только хуже. Работает только с `.ass` и `.srt` Больше инфы [тут](https://animecards.site/subtitles/)

### Установка

Скачайте [данный архив](https://mega.nz/folder/W19xUQJT#Ele4MKy-c61AOp2ZaN5AYg) и выгрузите его внутрь папки с видео и субтитрами. Данную папку нужно будет каждый раз в ручную перетаскивать в папку нового сериала\аниме, к сожалению. Не советую разархивировать стандартный архиватором Windows, это будет безумно долго. Должно выглядеть как-то так:

![](/imgvid/retimer.png)

### Использование

Количество видео и субтитров должно быть строго ОДИНАКОВОЕ, иначе видео не запуститься. Если есть какие-то опенинги или спешалы - уберите их. Откройте папочку `auto-sub-retimer` и запустите `RUN_ME.bat`. Не пугайтесь консоли, выбирайте ваш формат субтитров (`.srt` - 1 / `.ass` - 2).

Теперь важный момент. Желательно выбирать 1 вариант, потому что он точнее, но он требует чтобы внутри скачанного вами сериала уже были другие субтитры, то есть вам нужно скачивать аниме\дорамы с русскими\английскими сабами, и уже с ними синхронизировать японские сабы. Это довольно просто, на самом деле, потому что сидов на сериалы с сабами практически всегда больше в любом случае.

Если же вы не смогли найти вариант с другими родными сабами, то придется использоваться вариант 2, который будет пытаться синхронизировать по аудио, но он очень неточный.

`Split Penalty? Only change this if default resulted in mis-timed subs. (Default 7):` - просто жмите Enter.

Если вы хотите просто переименовать файлы, запускайте `rename_only.bat`, там все так же, но проще.

Если все прошло успешно, то результат будет похож на это:

![](/imgvid/retimer2.png)

## Whisper AI

Если субтитры не нашли, ИИ может вам помочь! Оно сканирует неидеально, но лучше, чем ничего.

### На своем устройстве

Если у вас неплохой компьютер, вы можете запустить `Whisper AI` на своей машине, это удобнее всего делать через `SubTitle Edit`.

Сверху выбирете вкладку `Video > Audio to text (Whisper)...`. Выбирете язык и размер модели (размер и, соответственно, точность будут зависеть от него) и язык. Модели нужно скачивать. Запускайте и ждите!

### Google Colab

Зайдите на [Google Colab](https://colab.research.google.com/drive/) и создайте новый `notebook` (блокнот)

Слева нажмите на папочку и загрузите туда ваши видео файл(ы).

Нажмите `+ Code` и впишите в черное окно `!pip install git+https://github.com/openai/whisper.git`, нажмите на значок старта. При завершении также проделайте с `!sudo apt update && sudo apt install ffmpeg`.

Когда все загрузиться, можно просить нейросеть обработать файл. Впишите снова код ниже, потом ПКМ по нужному вам файлу - скопировать путь - вставьте его в кавычки. Запускайте и ждите, это будет долго.

`!whisper "НАЗВАНИЕ_ФАЙЛА.ФОРМАТ" --language Japanese --model medium`




