 (function(){
    'use strict';
    angular
    .module('eKinerja')
    .factory('TemplatePengumumanService',
    ['PengumumanService', 'EkinerjaService', 'logo_bekasi', 'logo_garuda',
    function (PengumumanService, EkinerjaService, logo_bekasi, logo_garuda) {
        var service = {}; 

        service.template = function(data){
            var docDefinition = {
                content: [
                    {
                        margin:[0,0,0,15],
                        table:{
                            widths: [100,'*'],
                            body: [
                                [
                                    {
                                        image: logo_bekasi,
                                        width: 90,
                                        height: 90,
                                        alignment: 'center'
                                    },
                                    [
                                        {
                                            text:[
                                                {text: 'PEMERINTAHAN KABUPATEN BEKASI\n', alignment: 'center', style:'header'},
                                                {text: '' + data.unitKerjaPenandatangan.toUpperCase() + '\n', alignment: 'center', style:'header'},
                                                {text: 'Komplek Perkantoran Pemerintah Kabupaten\nBekasi Desa Sukamahi Kecamatan Cikarang Pusat', style: 'header2'}
                                            ]
                                        },
                                        {
                                            margin: [15,0,0,0],
                                            table: {
                                                body: [
                                                    [
                                                        {text: 'Telp. (021) 89970696', style: 'header3'},
                                                        {text: 'Fax. (021) 89970064', style: 'header3'},
                                                        {text: 'email : diskominfo@bekasikab.go.id', style: 'header3'}
                                                    ]
                                                ]
                                            }, layout: 'noBorders'
                                        }
                                    ]
                                ],
                                [{text:'', colSpan: 2}],
                                [{text:'', fillColor: 'black', colSpan: 2}]
                            ]
                        },
                        layout: 'noBorders'
                    },

                    {
                        text: 'PENGUMUMAN', style: 'nama_judul'
                    },
                    {
                        margin:[0,0,0,15],
                        text: [{text : 'NOMOR ', style: 'judul_nomor'}, '' + data.nomorUrusan + '/' + data.nomorUrut + '/' + data.nomorPasanganUrut + '/' + data.nomorUnit + '/' + data.nomorTahun]
                    },

                    {
                        margin:[0,0,0,15],
                        text: [{text: 'TENTANG\n', style: 'nama_judul'}, {text: '' + data.tentang.toUpperCase(), style: 'nama_judul'}]
                    },

                    {
                        text: '' + data.isiPengumuman,  margin: [0,20,0,30], fontSize: 12, alignment: 'justify'
                    },

                    {
                        columns: [
                            {
                                width: '63%',
                                text: ''
                            },
                            {
                                style: 'tandaTangan',
                                table: {
                                    widths: [200],
                                    body: [
                                        [{text: ['Dikeluarkan di ', {text:'' + data.kotaPembuatanSurat.toUpperCase(), bold:true}], alignment : 'left'}],
                                        [{text: ['pada tanggal ', {text:'' + EkinerjaService.IndonesianDateFormat(new Date(data.tanggalPembuatanMilis)), bold:true}], alignment : 'left'}],
                                        [{text: '' + data.jabatanPenandatangan + ',', alignment : 'left', bold: true}],
                                        [{text: ' ',margin: [0,20]}],
                                        [{text: '' + data.gelarDepanPenandatangan + data.namaPenandatangan + data.gelarBelakangPenandatangan, alignment : 'left', bold: true}],
                                        [{text: '' + data.pangkatPenandatangan, alignment : 'left', bold: true}],
                                        [{text: 'NIP. ' + data.nipPenandatangan, alignment : 'left'}]
                                    ]
                                },
                                layout: 'noBorders'
                            }
                        ]
                    }
                ],
                styles: {
                    header: {
                        bold: true,
                        fontSize: 14,
                        alignment: 'center'
                    },
                    header2: {
                        fontSize: 12,
                        alignment: 'center'
                    },
                    header3: {
                        fontSize: 10,
                        alignment: 'center'
                    },
                    nama_judul: {
                        alignment : 'center',
                        bold: true,
                        fontSize: 12
                    },
                    judul_nomor: {
                        alignment : 'center',
                        bold: true,
                        fontSize: 12
                    },
                    demoTable: {
                        color: '#000',
                        fontSize: 12
                    },
                    tandaTangan: {
                        color: '#000',
                        fontSize: 12,
                        alignment:'right'
                    }
                },

                images:{
                    logo: logo_bekasi
                },
                footer: function(currentPage, pageCount) { var foot =  
                    {
                        margin: 10,
                        columns: [{text: currentPage.toString() + ' of ' + pageCount}]
                    }
                    if(data.barcodeImage != null)
                        foot.columns.push({
                            image: 'data:image/jpeg;base64,' + data.barcodeImage,
                            width: 200
                        })
                    return foot;
                }
            };

            return docDefinition;
        }
 
        return service;
    }])
    /* jshint ignore:end */

})();
