for f in *.json; do 
    new_name=`echo $f | tr '[:upper:]' '[:lower:]'`
    mv -- "$f" "${new_name%.json}.ts"
done