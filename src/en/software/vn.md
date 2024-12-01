---

Author:
title: Визуальные новеллы и игры
shortTitle: ВН и игры
description: Установка игр и софта для комфортной игры в них.
icon: "/ico/videogame.svg"
category: 
 - инструменты
tag:
 - ВН\игры
Date: 
ReadingTime: 
order: 8
---




Тут будет показано какой софт нужно использовать чтобы играть и майнить видеоигры, преимущественно визуальные новеллы, с комфортом и удовольствием.

-----

 



## Locale Emulator (Windows)

Многие японские игры некорректно работают без японской локали. Её либо можно поменять у себя на компьютере на такую, либо можно скачать эмулятор локали и запускать с ним японские игры. Тут будет показан второй вариант.

Скачайте на [GitHub](https://github.com/xupefei/Locale-Emulator/releases) последний релиз, выгрузите его в папочку со всеми другими программами. Запустите LEInstaller.exe и нажмите `Install for current user` или `Install for all Users` по желанию. После перезагрузки компьютера, при запуске программ, которые этого требуют, будет вариант `Run In Japanese`. Если вы устанавливаете японские программы, лучше запускать от имени администратора.

## Textractor

Эта программа предназначена для того, чтобы вытаскивать текст из ВН и использовать его с Yomitan/JL. Работает с большинством ВН.

### Установка

Скачайте на [GitHub](https://github.com/Artikash/Textractor/releases) последнюю версию программы. После обычной установки должно быть 2 версии программы: `x86` и `x64`, они настраиваются отдельно (но все одинаково). Нужно использовать ту версию, которая совпадает с игрой, т.е если игра 64-битная, то и `Textractor` нужно запускать `х64`.

При запуске у вас будут различные всплывшие окна, их можно закрыть нажатием `Esc`. Нажмите на **Extensions**, там нужно удалить нажатием `Delete` все лишнее, чтобы остались `Copy to Clipboard` и `Remove Repeated Characters`

![](/imgvid/Textractor.png)

### Использование

Теперь можно попробовать вытащить текст из игры. Нажмите Attach to game и выбирете процесс игры. Он может называться не так, как окно, если что в диспетчере задач можно найти название или по иконке. Нажимаете **ОК**, и тыкните один раз в игру, чтобы процессы пошли. После завершения инжекта, еще раз нажмите на диалог, чтобы пошла следующая строка, и в экстракторе тыкните на 0:0:FFFFFFFFF:FFFFFFF:FFFFFFFFFF: Console и выбирете любой процесс (желательно самый верхний). Теперь жмите стрелочку вниз пока не найдете строчки текста из игры. Пример данного действия ниже:

<VidStack src="/imgvid/textractor.mp4"/>

Если нормального хука нет, пробуйте искать хуки (не забудьте поставить галочку). Будет уведомление, что игра может вылететь, но это редкость. После поиска хуков также включите следующую строку и ищите.

Также можно попробовать найти конкретный хук [тут](https://wiki.anime-sharing.com/hgames/index.php?title=AGTH/H-Codes#More_H-Codes.5B85.5D) или [тут](https://docs.google.com/document/d/e/2PACX-1vQ__TEa5TDiIeVjA4n8E12TQ_DfOyHT3TH_gCVRLP6OPi8i2nsZfMnDlzdp3fK2W-dwQtwIFwvxIGBy/pub) или [тут](https://ultrapre.github.io/clip/HCODE/2019-11-26-1574749676/index.html#WikiaArticleComments). Ищите название игры через **Ctrl+F**. Убедитесь, что страница прогружена полностью, чем искать.

Если не получилось, не нужно бежать использовать [Yomininja](https://neongoo.ru/ocr-tools.html#yomininja). Попробуйте погуглить название игры + textractor, посмотрите есть ли игра в списке Agent (следующий пункт в статье), попробуйте нажать на **"Search for hooks"**, поставьте галочку и сначала просто **Start hook search**. Если не находит, снова **"Search for hooks"** > **Search for specific text** и постарайтесь ввести то, что вы видите на экране, но максимально точно. Если даже так он не найдет нужные хуки - идите в интернет с поиском конкретной игры, например вот текстрактор для [Stein's Gate](https://github.com/shiiion/steinsgate_textractor). Если старых постов нет - просите помощи или пользуйтесь другими программами, о которых написано далее. Yomininja это всегда должен быть самый отчаянный вариант, он очень неудобен, по сравнению с хуком полноценным.

## Agent

**Agent** это программа которая делает то же самое, что и **Textractor**, но с другими программами. Например, она работает с играми через эмуляторы **yuzu, vita3k, ppsspp, rpcs3** или серией игр **Persona** и даже работает на **Android**! Полный список игр можно посмотреть [тут](https://github.com/0xDC00/scripts). Некоторые игры без эмуляторов можно хукать без скрипта, но как повезет.

### Установка и настройка

Скачиваете архив с [GitHub](https://github.com/0xDC00/agent/releases) для вашего устройства, в случае Windows перебрасываете содержимое архива в новую папочку Agent в своей папочке с программами, запускаете `agent.exe`. При первом запуске нужно скачать все скрипты, нажимаете как на скриншоте.

![](/imgvid/agent.png)

теперь зайдите во вкладку Translate, выключите `Machine Translate`, Update Scripts поставьте на 24 или 48ч.

### Применение

Когда у вас будет запущена игра, вы можете либо выбрать процесс, либо перетащить "прицел" на окно программы, потом нужно выбрать подходящий скрипт и нажать Attach. Если скрипт подходящий и все правильно - будет сообщение о том что все хорошо и текст будет копироваться в буфер. Вот [видео пример](https://www.youtube.com/watch?v=dFfuq2UnKjU&list=PLTZXVVG9AT6Sbl1Yg42sxzVAS6IMfnaNH&index=2)

Если ничего не работает, посмотрите варианты захвата текста с изображения на странице про [OCR инструменты](/software/ocr-tools.md)

## Magpie

приложение для апскейла кэрана, удобно если вы играете в старые ВН и оно имеет маленькое окно.

Гайд в работе, пока [просто ссылка](https://github.com/Blinue/Magpie)