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
            margin-top: -80px;
            margin-left: -90px;
            margin-right: -90px;
            margin-bottom: 15px;
            height: 110px;
            background-color: #dddddd;
            font-family: Arial;
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
            margin-bottom: 40px;
        }
        .texte {
            padding: 45px;
            margin-left: 45px;
            margin-right: 45px;
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
    @if($data['bon'])
    @foreach ($qt as $k => $val)
    <div style="text-align: center;" class="entete">
        <br>
        <br>
        <h3> BON D'ENLÈVEMENT
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
            <th style="width:50%; text-align: center;"> Quantité </th>
        </tr>
        @foreach ($val as $i => $item)
        <tr>
            <td style="text-align: center;"> {{$designation[$k][$i]}} </td>
            <td style="text-align: center;">{{$item}}</td>
        </tr>
        @endforeach
    </table>
    <br>
    <p> ouagadougou, {{date('d - m - Y  h:m', strtotime($data['created_at']))}} </p>
    <br>
    <p> <b class="right2">Le Responsable</b> </p>
    <div class="page-break"></div>
    @endforeach
    @endif
    <div class="entete">
        <div class="texte">
            <p>
                <h3> BOUDA<sup>com </sup></h3>
            </p>
            <h4 class="right">
                +226 xx xx xx xx / oo oo oo oo / xo xo xo xo
            </h4>
            <h4 class="right">
                Ouagagougou avenue du grand marché vvvvvvvvvvvvvvvvvvvvvvv
            </h4>
        </div>
    </div>

    <div class="entete2">
        <div>
            <small class="right2"> ouagadougou, {{date('d - m - Y  h:m', strtotime($data['created_at']))}} </small>
            <h3> Doit : {{$data['client']['nomClient']}} {{$data['client']['telephoneClient']}} </h3>
            <h4> Facture : #{{ $data['referenceVente']}}</h4>

        </div>
    </div>
    <table>
        <tr>
            <th style="text-align: center;"> # </th>
            <th style="width:24%; text-align: center;"> Article </th>
            <th style="width:20%; text-align: center;"> Quantité </th>
            <th style="width:24%; text-align: center;"> Prix Unitaire </th>
            <th style="width:24%; text-align: center;"> Prix Total </th>
        </tr>
        @foreach ($data['articles'] as $k => $val)
        <tr>
            <td style="text-align: center;">{{$k +1 }}</td>
            <td style="text-align: center;">{{$val['article']['designation']}} {{$val['nomType']}}</td>
            <td style="text-align: center;">{{$val['pivot']['quantite']}}</td>
            <td style="text-align: center;">{{$val['pivot']['prixUnitaire']}}</td>
            <td style="text-align: center;">{{ $val['pivot']['prixUnitaire'] * $val['pivot']['quantite']  }}</td>
        </tr>
        @endforeach
        <tr>
            <td style="text-align: center;" colspan="3">Montant de la vente </td>
            <td style="text-align: center;" colspan="2">{{ $data['prixTotal']  }}</td>
        </tr>
        <tr>
            <td style="text-align: center;" colspan="3">remise sur la facture </td>
            <td style="text-align: center;" colspan="2">{{ $data['remise']  }}</td>
        </tr>
        <tr>
            <td style="text-align: center;" colspan="3">Montant payé </td>
            <td style="text-align: center;" colspan="2">{{ $data['sommeVersee']  }}</td>
        </tr>
        <tr>
            <td style="text-align: center;" colspan="3">Reliquat </td>
            <td style="text-align: center;" colspan="2">{{ $data['reliquat']  }}</td>
        </tr>
    </table>
    <br>
    <p>Arrêter la présente facture à la somme de : <b>
            {{$trad}} Francs CFA .</b></p>

    <br>
    <p> <b class="right2">Le Responsable</b> </p>


</body>

</html>
