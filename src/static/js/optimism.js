$(function() {
  main()
});

const main = async() => {

  let tableData = {
    "title":"Optimistic Network",
    "heading":["Pool Provider","LP", "Reward Tokens", "INFO"],
    "rows": [
      ["Synapse               ", `<a href='synapse'           >Various</a>`,"SYN          ","https://synapseprotocol.com"],
      ["WePiggy               ", `<a href='wepiggy'           >Various</a>`,"WPC          ","https://app.wepiggy.com"],
      ["NYAN                  ", `<a href="nyan"              >Various</a>`,"NYAN         ","https://optinyan.xyz/"],
      ["ahegao.finance        ", `<a href="ahegao"            >Various</a>`,"AHEGAO       ","https://ahegao.finance"],
      ["OptiDOGE              ", `<a href="optidoge"          >Various</a>`,"OPTIDOGE     ","https://optidoge.xyz"],
      ["Rubicon               ", `<a href="rubicon"           >Various</a>`,"Various      ","https://app.rubicon.finance"],
      ["Synthetix             ", `<a href="synthetix"         >Various</a>`,"SNX          ","https://staking.synthetix.io"],
      ["Thales                ", `<a href="thales"            >Various</a>`,"THALES       ","https://thalesmarket.io"],
      ["Stargate              ", `<a href="stargate"          >Various</a>`,"STG          ","https://stargate.finance"],
      ["Hundred *             ", `<a href="hundred"           >Various</a>`,"HND          ","https://hundred.finance"],
      ["Xtoken Terminal       ", `<a href="xtokenterminal"    >Various</a>`,"HND          ","https://app.xtokenterminal.io"],
      ["Velodrome             ", `<a href="velodrome"         >Various</a>`,"VELO         ","https://app.velodrome.finance"],
      ["Beefy                 ", `<a href="beefy"             >Various</a>`,"BEEFY        ","https://app.beefy.finance"],
      ["Lyra                  ", `<a href="lyra"              >Various</a>`,"LYRA         ","https://app.lyra.finance"],
      ["Degen Eth             ", `<a href="degeneth"          >Various</a>`,"BANDIT       ","https://degeneth.xyz/"],
      ["OpenXSwap             ", `<a href="openxswap"         >Various</a>`,"OPENX        ","https://openxswap.exchange"],
      ["Hop Exchange          ", `<a href="hop"               >Various</a>`,"HOP          ","https://app.hop.exchange"]
    ]
  }

  let table = new AsciiTable().fromJSON(tableData);
  document.getElementById('log').innerHTML += table + '<br />';
  hideLoading();

}