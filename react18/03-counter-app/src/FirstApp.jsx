import PropTypes from 'prop-types'

export const FirstApp = ( { title, subtitle, name } ) => {
    return (
        <>
            <h1 data-testid="test-title">{ title }</h1>
            <p>{ subtitle }</p>
            <p>{ name }</p>
        </>
    )
}


FirstApp.propTypes = {
    subtitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

FirstApp.defaultProps = {
    name: 'Cesar Japo',
    subtitle: 'No Subtitle',
    // title: 'No title',
}