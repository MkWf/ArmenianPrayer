/*
Base styles and data for liturgy.
Data from database will be added to this string to produce the complete HTML to be rendered
*/

export const liturgyHTML =  
    `
    <style type="text/css">
        table
        {
            border-style: solid;
            border-width: 1px;
            border-color: black;
            border-collapse: collapse;
        }
        
        table tr
        {
            background-color: white;
            
        }
        
        table tr.header
        {
            background-color: #DDDDDD;
        }
        
        table tr.title
        {
            background-color: #EEEEEE;
        }
        
        table tr td
        {
            padding: 0px 3px 0px 3px;
            border-style: solid;
            border-width: 1px;
            border-color: #666666;
        }
        
        table tr td.null
        {
            color: #999999;
            text-align: center;
            padding: 0px 3px 0px 3px;
            border-style: solid;
            border-width: 1px;
            border-color: #666666;
        }
        
        table tr td.separator
        {
            padding: 0px 3px 0px 3px;
            border-style: solid;
            border-width: 1px;
            border-color: #666666;
            background-color: #DDDDDD;
        }
        
        table tr td.rownum
        {
            padding: 0px 3px 0px 3px;
            border-style: solid;
            border-width: 1px;
            border-color: #666666;
            background-color: #DDDDDD;
            text-align: right;
        }
    </style>
    
    <body>
        <table>
            <tr class="title">
                <td colspan="3" align="center"></td>
            </tr>
    `;