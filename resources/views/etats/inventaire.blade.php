<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
    <meta charset="utf-8">
    <title></title>
    <style>
        .page-break {
            page-break-after: always;
        }
        .entete {
            margin-top: -60px;
            margin-left: -90px;
            margin-right: -90px;
            margin-bottom: 35px;
            height: 70px;
            background-color: #dddddd;
            font-family: Arial;
            text-align: center;
        }

        .entete2 {
            margin-top: -5px;
            height: 80px;
        }

        .right {
            float: right;
            margin-top: -40px;

        }

        .right2 {
            float: right;

        }
        table {
            font-family: arial, sans-serif;
            border-collapse: collapse;
            width: 100%;
        }

        td,
        th {
            border: 1px solid #dddddd;
            text-align: left;
            padding: 8px;
        }

        tr:nth-child(even) {
            background-color: #dddddd;
        }

    </style>
</head>

<body>


    @foreach ($data as $k => $val)
    <div class="entete"><br>
        <h3> INVENTAIRE
            @if ($k == 1)
                BOUTIQUE
            @elseif ($k == 2)
                RAKIETA
            @else
                CORAM
            @endif        
        </h3>
    </div>
    <table>
        <tr>
            <th style="width:50%; text-align: center;"> Article </th>
            
            <th style="width:50%; text-align: center;"> Qt. physique </th>
        </tr>
        @foreach ($val as $i => $item)
            <tr>
                <td style="text-align: center;">{{$item['nom']}}</td>
                <td style="text-align: center;"></td>
            </tr>
        @endforeach
    </table>
    <div class="page-break"></div>
    @endforeach


</body>

</html>
