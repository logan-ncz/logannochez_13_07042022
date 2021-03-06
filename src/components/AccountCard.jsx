/**Component used to render AccountCards on user's profile
 * @component
 * 
 * @param {*} proptypes 
 * @returns {}
 */

function AccountCard({ accountName, amount, balanceType }) {
    return (
        <section className="account">
            <div className="account-content-wrapper">
                <h3 className="account-title">Argent Bank {accountName}</h3>
                <p className="account-amount">{'$' + amount}</p>
                <p className="account-amount-description">{balanceType} Balance</p>
            </div>

            <div className="account-content-wrapper cta">
                <button className="transaction-button">View transactions</button>
            </div>
        </section>
    )
}

export default AccountCard