document.getElementById("code_brod").innerHTML=`
        <div class="code-container">
            <div class="codebox">
                <input type="text" value="#####" id="redeemCode" readonly>
                <button id="copy-but" class="copy-button" onclick="get_code()">Show Code</button>
            </div>
        </div>`
function copyRedeemCode() {
            // Get the input field
            var redeemCodeInput = document.getElementById("redeemCode");

            // Use the modern clipboard API
            navigator.clipboard.writeText(redeemCodeInput.value).then(function() {
                alert("Redeem code copied: " + redeemCodeInput.value);
            }, function(err) {
                console.error('Failed to copy text: ', err);
            });
        }
    function get_code(){
      document.getElementById("copy-but").textContent = "Please Wait.."
      setTimeout(function() {
        document.getElementById("redeemCode").value = Redeemcode;
        document.getElementById("copy-but").textContent = "copy"
        document.getElementById("copy-but").onclick = copyRedeemCode()
      }, time_mil); // 5000 milliseconds = 5 seconds
    }
