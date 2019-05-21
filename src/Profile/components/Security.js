import React from 'react';
import Radium from 'radium';
import theme from '../../theme.js';
import Input from '../../components/Input';
import Button from '../../components/Button';
import CheckBox from '../../components/icons/CheckBox';

const Security = ({
    form,
    user,
    actions
}) => (
    <section style={ styles.container }>
        <div style={ styles.leftRail }>
            <h3>Change my credentials</h3>
            <form onSubmit={ e => {
                e.preventDefault();
                actions.updatePassword();
            }}>
                <Input  type="password" 
                        placeholder="Please enter your current password"
                        customStyles={ styles.passwordInput }
                        errors={ form.errors['password'] }
                        onChange={ value => actions._bindOnChange('password', value) }
                />
                <Input  type="password"
                        placeholder="Please enter a new password"
                        customStyles={ styles.passwordInput }
                        errors={ form.errors['new_password'] }
                        onChange={ value => actions._bindOnChange('new_password', value) }
                />
                <Input  type="password"
                        placeholder="Please re-enter your new password"
                        customStyles={ styles.passwordInput }
                        onChange={ value => actions._bindOnChange('new_password_confirmation', value) }
                />
                <Button customStyles={ styles.button }>Update Password</Button>
            </form>
        </div>
        <div style={styles.rightRail}>
            <p onClick={ () => actions.toggleNotify({ notifyByEmail: !user.notifyByEmail }) }>
                <CheckBox customStyles={ styles.checkBox } isChecked={ user.notifyByEmail }/> 
                Update me by email
            </p>
            <p onClick={ () => actions.toggleNotify({ notifyBySms: !user.notifyBySms }) }>
                    <CheckBox customStyles={ styles.checkBox } isChecked={ user.notifyBySms }/> 
                Update me by Sms
            </p>
        </div>
    </section>
);

const styles = {
    container: {
        display: 'flex',
        margin: 0,
        width: '100%',
        [theme.media.tabletAndAbove]: {
            margin: 40
        }
    },
    rightRail: {
        width: '100%',
        margin: '20px 40px',
        [theme.media.tabletAndAbove]: {
            width: '40%'
        }
    },
    leftRail: {
        width: '100%',
        [theme.media.tabletAndAbove]: {
            width: '60%'
        }
    },
    passwordInput: {
        width: '100%'
    },
    button: {
        width: '100%',
        marginTop: 20,
        [theme.media.tabletAndAbove]: {
            width: '60%',
            minWidth: 300
        }
    },
    checkBox: {
        marginRight: 10,
        verticalAlign: 'middle'
    }
}

export default Radium(Security);