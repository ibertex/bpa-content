
import { html,css,LitElement} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';
import { Grid, html as gridhtml } from "https://unpkg.com/gridjs?module";

export class LakeTree_DynamicGrid extends LitElement {

  static styles = css`
.gridjs-footer button,.gridjs-head button{background-color:transparent;background-image:none;border:none;cursor:pointer;margin:0;outline:none;padding:0}.gridjs-temp{position:relative}.gridjs-head{margin-bottom:5px;padding:5px 1px;width:100%}.gridjs-head:after{clear:both;content:"";display:block}.gridjs-head:empty{border:none;padding:0}.gridjs-container{color:#000;display:inline-block;overflow:hidden;padding:2px;position:relative;z-index:0}.gridjs-footer{background-color:#fff;border-bottom-width:1px;border-color:#e5e7eb;border-radius:0 0 8px 8px;border-top:1px solid #e5e7eb;box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.26);display:block;padding:12px 24px;position:relative;width:100%;z-index:5}.gridjs-footer:empty{border:none;padding:0}input.gridjs-input{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;border:1px solid #d2d6dc;border-radius:5px;font-size:14px;line-height:1.45;outline:none;padding:10px 13px}input.gridjs-input:focus{border-color:#9bc2f7;box-shadow:0 0 0 3px rgba(149,189,243,.5)}.gridjs-pagination{color:#3d4044}.gridjs-pagination:after{clear:both;content:"";display:block}.gridjs-pagination .gridjs-summary{float:left;margin-top:5px}.gridjs-pagination .gridjs-pages{float:right}.gridjs-pagination .gridjs-pages button{background-color:#fff;border:1px solid #d2d6dc;border-right:none;outline:none;padding:5px 14px;-webkit-user-select:none;-moz-user-select:none;user-select:none}.gridjs-pagination .gridjs-pages button:focus{border-right:1px solid #d2d6dc;box-shadow:0 0 0 2px rgba(149,189,243,.5);margin-right:-1px;position:relative}.gridjs-pagination .gridjs-pages button:hover{background-color:#f7f7f7;color:#3c4257;outline:none}.gridjs-pagination .gridjs-pages button:disabled,.gridjs-pagination .gridjs-pages button:hover:disabled,.gridjs-pagination .gridjs-pages button[disabled]{background-color:#fff;color:#6b7280;cursor:default}.gridjs-pagination .gridjs-pages button.gridjs-spread{background-color:#fff;box-shadow:none;cursor:default}.gridjs-pagination .gridjs-pages button.gridjs-currentPage{background-color:#f7f7f7;font-weight:700}.gridjs-pagination .gridjs-pages button:last-child{border-bottom-right-radius:6px;border-right:1px solid #d2d6dc;border-top-right-radius:6px}.gridjs-pagination .gridjs-pages button:first-child{border-bottom-left-radius:6px;border-top-left-radius:6px}.gridjs-pagination .gridjs-pages button:last-child:focus{margin-right:0}button.gridjs-sort{background-color:transparent;background-position-x:center;background-repeat:no-repeat;background-size:contain;border:none;cursor:pointer;float:right;height:24px;margin:0;outline:none;padding:0;width:13px}button.gridjs-sort-neutral{background-image:url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDEuOTk4IiBoZWlnaHQ9IjQwMS45OTgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQwMS45OTggNDAxLjk5OCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHBhdGggZD0iTTczLjA5MiAxNjQuNDUyaDI1NS44MTNjNC45NDkgMCA5LjIzMy0xLjgwNyAxMi44NDgtNS40MjQgMy42MTMtMy42MTYgNS40MjctNy44OTggNS40MjctMTIuODQ3cy0xLjgxMy05LjIyOS01LjQyNy0xMi44NUwyMTMuODQ2IDUuNDI0QzIxMC4yMzIgMS44MTIgMjA1Ljk1MSAwIDIwMC45OTkgMHMtOS4yMzMgMS44MTItMTIuODUgNS40MjRMNjAuMjQyIDEzMy4zMzFjLTMuNjE3IDMuNjE3LTUuNDI0IDcuOTAxLTUuNDI0IDEyLjg1IDAgNC45NDggMS44MDcgOS4yMzEgNS40MjQgMTIuODQ3IDMuNjIxIDMuNjE3IDcuOTAyIDUuNDI0IDEyLjg1IDUuNDI0ek0zMjguOTA1IDIzNy41NDlINzMuMDkyYy00Ljk1MiAwLTkuMjMzIDEuODA4LTEyLjg1IDUuNDIxLTMuNjE3IDMuNjE3LTUuNDI0IDcuODk4LTUuNDI0IDEyLjg0N3MxLjgwNyA5LjIzMyA1LjQyNCAxMi44NDhMMTg4LjE0OSAzOTYuNTdjMy42MjEgMy42MTcgNy45MDIgNS40MjggMTIuODUgNS40MjhzOS4yMzMtMS44MTEgMTIuODQ3LTUuNDI4bDEyNy45MDctMTI3LjkwNmMzLjYxMy0zLjYxNCA1LjQyNy03Ljg5OCA1LjQyNy0xMi44NDggMC00Ljk0OC0xLjgxMy05LjIyOS01LjQyNy0xMi44NDctMy42MTQtMy42MTYtNy44OTktNS40Mi0xMi44NDgtNS40MnoiLz48L3N2Zz4=");background-position-y:center;opacity:.3}button.gridjs-sort-asc{background-image:url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOTIuMzYyIiBoZWlnaHQ9IjI5Mi4zNjEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI5Mi4zNjIgMjkyLjM2MSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHBhdGggZD0iTTI4Ni45MzUgMTk3LjI4NyAxNTkuMDI4IDY5LjM4MWMtMy42MTMtMy42MTctNy44OTUtNS40MjQtMTIuODQ3LTUuNDI0cy05LjIzMyAxLjgwNy0xMi44NSA1LjQyNEw1LjQyNCAxOTcuMjg3QzEuODA3IDIwMC45MDQgMCAyMDUuMTg2IDAgMjEwLjEzNHMxLjgwNyA5LjIzMyA1LjQyNCAxMi44NDdjMy42MjEgMy42MTcgNy45MDIgNS40MjUgMTIuODUgNS40MjVoMjU1LjgxM2M0Ljk0OSAwIDkuMjMzLTEuODA4IDEyLjg0OC01LjQyNSAzLjYxMy0zLjYxMyA1LjQyNy03Ljg5OCA1LjQyNy0xMi44NDdzLTEuODE0LTkuMjMtNS40MjctMTIuODQ3eiIvPjwvc3ZnPg==");background-position-y:35%;background-size:10px}button.gridjs-sort-desc{background-image:url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOTIuMzYyIiBoZWlnaHQ9IjI5Mi4zNjIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI5Mi4zNjIgMjkyLjM2MiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHBhdGggZD0iTTI4Ni45MzUgNjkuMzc3Yy0zLjYxNC0zLjYxNy03Ljg5OC01LjQyNC0xMi44NDgtNS40MjRIMTguMjc0Yy00Ljk1MiAwLTkuMjMzIDEuODA3LTEyLjg1IDUuNDI0QzEuODA3IDcyLjk5OCAwIDc3LjI3OSAwIDgyLjIyOGMwIDQuOTQ4IDEuODA3IDkuMjI5IDUuNDI0IDEyLjg0N2wxMjcuOTA3IDEyNy45MDdjMy42MjEgMy42MTcgNy45MDIgNS40MjggMTIuODUgNS40MjhzOS4yMzMtMS44MTEgMTIuODQ3LTUuNDI4TDI4Ni45MzUgOTUuMDc0YzMuNjEzLTMuNjE3IDUuNDI3LTcuODk4IDUuNDI3LTEyLjg0NyAwLTQuOTQ4LTEuODE0LTkuMjI5LTUuNDI3LTEyLjg1eiIvPjwvc3ZnPg==");background-position-y:65%;background-size:10px}button.gridjs-sort:focus{outline:none}table.gridjs-table{border-collapse:collapse;display:table;margin:0;max-width:100%;overflow:auto;padding:0;table-layout:fixed;text-align:left;width:100%}.gridjs-tbody,td.gridjs-td{background-color:#fff}td.gridjs-td{border:1px solid #e5e7eb;box-sizing:content-box;padding:12px 24px}td.gridjs-td:first-child{border-left:none}td.gridjs-td:last-child{border-right:none}td.gridjs-message{text-align:center}th.gridjs-th{background-color:#f9fafb;border:1px solid #e5e7eb;border-top:none;box-sizing:border-box;color:#6b7280;outline:none;padding:14px 24px;position:relative;-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:middle;white-space:nowrap}th.gridjs-th .gridjs-th-content{float:left;overflow:hidden;text-overflow:ellipsis;width:100%}th.gridjs-th-sort{cursor:pointer}th.gridjs-th-sort .gridjs-th-content{width:calc(100% - 15px)}th.gridjs-th-sort:focus,th.gridjs-th-sort:hover{background-color:#e5e7eb}th.gridjs-th-fixed{box-shadow:0 1px 0 0 #e5e7eb;position:sticky}@supports (-moz-appearance:none){th.gridjs-th-fixed{box-shadow:0 0 0 1px #e5e7eb}}th.gridjs-th:first-child{border-left:none}th.gridjs-th:last-child{border-right:none}.gridjs-tr{border:none}.gridjs-tr-selected td{background-color:#ebf5ff}.gridjs-tr:last-child td{border-bottom:0}.gridjs *,.gridjs :after,.gridjs :before{box-sizing:border-box}.gridjs-wrapper{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;border-color:#e5e7eb;border-radius:8px 8px 0 0;border-top-width:1px;box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.26);display:block;overflow:auto;position:relative;width:100%;z-index:1}.gridjs-wrapper:nth-last-of-type(2){border-bottom-width:1px;border-radius:8px}.gridjs-search{float:left}.gridjs-search-input{width:250px}.gridjs-loading-bar{background-color:#fff;opacity:.5;z-index:10}.gridjs-loading-bar,.gridjs-loading-bar:after{bottom:0;left:0;position:absolute;right:0;top:0}.gridjs-loading-bar:after{animation:shimmer 2s infinite;background-image:linear-gradient(90deg,hsla(0,0%,80%,0),hsla(0,0%,80%,.2) 20%,hsla(0,0%,80%,.5) 60%,hsla(0,0%,80%,0));content:"";transform:translateX(-100%)}@keyframes shimmer{to{transform:translateX(100%)}}.gridjs-td .gridjs-checkbox{cursor:pointer;display:block;margin:auto}.gridjs-resizable{bottom:0;position:absolute;right:0;top:0;width:5px}.gridjs-resizable:hover{background-color:#9bc2f7;cursor:ew-resize}
.aligncenter { display:block;text-align:center; }
.alignright { display:block;text-align:right; }
.alignleft { display:block;text-align:left; } 
tr:nth-child(even) {background-color: #f2f2f2;}
td.gridjs-td { background-color:transparent !important; }
  `;
  
  static properties = {
    columnConfiguration: {type: String },
    value: {type: String },
    onClickGetColumnValue: {type: String},
    enableOnClick: {type: Boolean},
    sortable: {type: Boolean},
    pagination: {type: Boolean},
    data: {type: String},
    customCSS: {type: String}
  };
  
  formatCell(row,format,type,align) {

    debugger;

    for (let index = 0; index < row.cells.length; index++) {
      var value = row.cells[index].data;
      format = format.replaceAll("[" + index + "]",value);
    }  

    const locale = navigator.languages[0];

    switch (type) {
      case "date":
        format = new Date(format).toLocaleDateString(locale, { year:"numeric", month:"short", day:"numeric"}); 
        break;
      case "number":
        format = parseInt(format);
        format = format.toLocaleString(locale);
        break;
      case "decimal":
        format = parseFloat(format);
        format = format.toLocaleString(locale);
        break;
      case "percent":
        format = parseFloat(format);
        format = format.toLocaleString(locale, { style: 'percent' });
          break;
      case "currency":
        format = format = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(parseFloat(format));
      default:
        break;
    }

    if (align != "") {
      //if align is set, add a span with the align class
      format = "<span class='align" + align.toLowerCase() + "'>" + format + "</span>";
    }

    return format;
  }


  updated() {

  debugger;
  
  var columnConfig = null;
  var datasource = [];

  try {
    columnConfig =  JSON.parse(this.columnConfiguration.replaceAll("\n",""));
    for (let index = 0; index < columnConfig.length; index++) {

      if (columnConfig[index]["align"] != undefined && columnConfig[index]["name"] != undefined) {
        //if align is set, add a span with the align class
        columnConfig[index]["name"] = gridhtml("<span class='align" + columnConfig[index]["align"].toLowerCase() + "'>" + columnConfig[index]["name"] + "</span>");
      }

      if (columnConfig[index]["format"] != undefined){
        columnConfig[index]["formatter"] = (_, row) => gridhtml(this.formatCell(row,columnConfig[index]["format"],(columnConfig[index]["type"] == undefined) ? "string" : columnConfig[index]["type"],(columnConfig[index]["align"] == undefined) ? "" : columnConfig[index]["align"]));
      }
    }
        
  } catch (error) {
    //login error
    console.log(error);
  } 

  //convert the datasource
  try {
    datasource =  JSON.parse(this.data.replaceAll("\n",""));
  } catch (error) {
    //login errors
    console.log(error);
  } 

  
  var gridElement = this.shadowRoot.querySelector("#wrapper");
  gridElement.innerHTML = "";

    var grid = new Grid({
    columns: columnConfig,
    search: false,
    data: datasource,
    sort: this.sortable,
    pagination: this.pagination
    }).render(gridElement);



    if (this.enableOnClick) {

      grid.on('rowClick', (args,data) => { 
        debugger;
        console.log(args)
        var rowData = {};
        
        for (var i = 0; i < grid.config.header.columns.length; i++) {
          rowData[grid.config.header.columns[i].id] = data.cells[i].data;
        }
  
        var returnValue = JSON.stringify(rowData); 
  
        try {
  
          if(this.onClickGetColumnValue != undefined && this.onClickGetColumnValue != "") {
            returnValue = rowData[this.onClickGetColumnValue];
          }
  
          const args = {
            bubbles: true,
            cancelable: false,
            composed: true,
            detail: returnValue,
          };
  
             const event = new CustomEvent('ntx-value-change', args);
             this.dispatchEvent(event);
          
        } catch (error) {
          console.log(error);
        }
      });
  


    }


      grid.forceRender();

    }


  static getMetaConfig() {
    return {
      controlName: 'LakeTree Dynamic Grid',
      iconUrl: "https://laketree.com/wp-content/themes/laketree/img/favicon/favicon-32x32.png",
      standardProperties : {
        description: true,
        fieldLabel: true,
        visibility: true
      },
      groupName : 'LakeTree',
      fallbackDisableSubmit: false,
      version: '1.3',
      properties: {
        columnConfiguration: {
          type: 'string',
          title: 'Column Configuration'
        },
        data: {
          type: 'string',
          title: 'Data',
          description: 'JSON datasource'
        },
        sortable: {
          type: 'boolean',
          title: 'Sortable',
          defaultValue: true
        },
        pagination: {
          type: 'boolean',
          title: 'Pagination',
          defaultValue: true
      },
        customCSS: {
          type: 'string',
          title: 'Custom CSS'
       }, 
       enableOnClick: {
        type: 'boolean',
        title: 'Enable OnClick',
        defaultValue: false
      },
        onClickGetColumnValue: {
          type: 'string',
          title: 'Column Name',
          description: 'On row click, get the value of this column. If empty, the whole row will be returned.'
        },
        value: {
          type: 'string',
          title: 'Click Value',
          isValueField: true,
       } 
      },
      events: ["ntx-value-change"],
    };
  }
  
  constructor() {
    super();
  }

  render() {
    return html`
    <div id="wrapper"></div>
    <style>${this.customCSS}</style>
    `;
  }

}

const elementName = 'laketree-dynamicgrid';
customElements.define(elementName, LakeTree_DynamicGrid);