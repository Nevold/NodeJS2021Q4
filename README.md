Для запуска приложения можно передать следующие параметры:

 **-c** - конфигурация шифра: 
  конфиг - это строка `{XY(-)}n`,где:
  * `X` это зашифрованный знак:
    * `C` - это Caesar шифр
    * `A` - это Atbash шифр
    * `R`- это ROT-8 шифр
  * `Y` - флаг кодирования или декодирования( кроме шифра Atbash )
    * `1` -кодирования
    * `0` - декодирования
 **-i** - путь ко входному файлу (по умолчанию input.txt)
 **-o** - путь к исходящему файлу ( по умолчанию output.txt)
 
 **Пример: node index -c C1-C1-R0-A -i ./input.txt -o ./output.txt**
 
