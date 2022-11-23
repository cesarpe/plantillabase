#!/bin/sh

#--
#Usa la herramienta  chmod para indicar que el archivo de texto es ejecutable:
# > chmod 755 zipmac.sh

#-- nombre del archivo
dt=`date +%Y%m%d_%H%M%S`

#--
#-- ./ es la carpeta actual
#-- los -x se excluyen
zip -r plantillabase_$dt.zip ./  -x ./node_modules/\*  -x ./xbackup/\*  -x "*.git*" -x "*.DS_Store" -x "*.zip"
