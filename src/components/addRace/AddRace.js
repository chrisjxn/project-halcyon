import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addRace } from '../../redux/mainReducer';
import './AddRace.css';

class AddRace extends Component {
    renderField(field) {
        const { meta: { touched, error } } = field;
        const className = `${touched && error ? "errorInput" : ''}`
        return (
            <div className="inputWrapper">
                <label>{field.label}</label>
                <input
                    className={className}
                    type="text"
                    {...field.input}
                />
                <div className="errorText">
                    {touched ? error : ''}
                </div>
            </div>
        );
    }

    onSubmit(values) {
        this.props.addRace(values, () => {
            this.props.history.push('/races');
        });
    }

    render() {
        console.log(this.props)
        const { handleSubmit } = this.props;

        return (
            <form className="formWrapper" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    label="Race number"
                    name="num"
                    component={this.renderField}
                />
                <Field
                    label="Race abbreviation"
                    name="abbrev"
                    component={this.renderField}
                />
                <Field
                    label="Race name"
                    name="race_name"
                    component={this.renderField}
                />
                <Field
                    label="Circuit"
                    name="circuit"
                    component={this.renderField}
                />
                <Field
                    label="Year"
                    name="year"
                    component={this.renderField}
                />
                <Field
                    label="Winner"
                    name="winner"
                    component={this.renderField}
                />
                <Field
                    label="Winner nationality (e.g. SPA)"
                    name="nationality"
                    component={this.renderField}
                />
                <Field
                    label="Winning team"
                    name="team"
                    component={this.renderField}
                />
                <Field
                    label="Winning manufacturer"
                    name="mfg"
                    component={this.renderField}
                />
                <Field
                    label="File name for host country flag (e.g. fra-flag.png)"
                    name="flag_url"
                    component={this.renderField}
                />
                <Field
                    label="Winner abbreviation (e.g. VR46)"
                    name="winner_abbrev"
                    component={this.renderField}
                />
                <Field
                    label="Winner shortened name (e.g. M. MARQUEZ)"
                    name="winner_short"
                    component={this.renderField}
                />
                <Field
                    label="Winning manufacturer abbreviation (e.g. DUC)"
                    name="mfg_abbrev"
                    component={this.renderField}
                />
                <Field
                    label="File name for winning manufacturer logo (e.g. duc-logo.png)"
                    name="mfg_logo_url"
                    component={this.renderField}
                />
                <div className="submitAndCancel">
                    <button type="submit">Submit</button>
                    <Link className="cancelLink" to="/races">Cancel</Link>
                </div>
            </ form>
        )
    }
}

function validate(values) {
    const errors = {};

    if (values.num % 1 !== 0 || values.num < 1) {
        errors.num = 'Cannot be blank: Please enter a whole number greater than 0'
    }

    if (!values.abbrev || values.abbrev.length > 3) {
        errors.abbrev = 'Cannot be blank: Please enter a race abbreviation (maximum of three characters)'
    }

    if (values.race_name && values.race_name.length > 60) {
        errors.race_name = 'Race name must be a maximum of 60 characters'
    }

    if (values.circuit && values.circuit.length > 40) {
        errors.circuit = 'Circuit must be a maximum of 40 characters'
    }

    if (values.year && (values.year % 1 !== 0 || values.year < 1)) {
        errors.year = 'Year must be a whole number greater than 0'
    }

    if (values.winner && values.winner.length > 20) {
        errors.winner = 'Winner must be a maximum of 20 characters'
    }

    if (values.nationality && values.nationality.length > 3) {
        errors.nationality = 'Winner nationality must be a maximum of three characters'
    }

    if (values.team && values.team.length > 30) {
        errors.team = 'Winning team must be a maximum of 30 characters'
    }

    if (values.mfg && values.mfg.length > 10) {
        errors.mfg = 'Winning manufacturer must be a maximum of 10 characters'
    }

    if (values.flag_url && values.flag_url.length > 12) {
        errors.flag_url = 'File name must be a maximum of 12 characters'
    }

    if (values.winner_abbrev && values.winner_abbrev.length > 4) {
        errors.winner_abbrev = 'Winner abbreviation must be a maximum of four characters'
    }

    if (values.winner_short && values.winner_short.length > 12) {
        errors.winner_short = 'Winner shortened name must be a maximum of 12 characters'
    }

    if (values.mfg_abbrev && values.mfg_abbrev.length > 3) {
        errors.mfg_abbrev = 'Winning manufacturer abbreviation must be a maximum of three characters'
    }

    if (values.mfg_logo_url && values.mfg_logo_url.length > 12) {
        errors.mfg_logo_url = 'File name must be a maximum of 12 characters'
    }

    return errors;
}

export default reduxForm({
    validate,
    form: 'AddRaceForm'
})(connect(null, { addRace })(AddRace));