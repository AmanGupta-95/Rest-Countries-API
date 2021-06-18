import React from 'react';

import LinkButton from '../../components/link-button/link-button.component';

import './detail.style.scss';

class Details extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			borders: [],
			country: '',
		};
	}

	fetchData = () => {
		const { name } = this.props.match.params;
		fetch(`https://restcountries.eu/rest/v2/name/${name}?fullText=true`)
			.then((res) => res.json())
			.then((data) => {
				this.setState({ country: data[0] });
				return data[0].borders;
			})
			.then((country) => {
				this.setState({ borders: [] });
				for (let i = 0; i < country.length; i++) {
					if (i > 2) break;
					fetch(`https://restcountries.eu/rest/v2/alpha/${country[i]}`)
						.then((res) => res.json())
						.then((data) =>
							this.setState({ borders: [...this.state.borders, data.name] })
						);
				}
			});
	};

	componentDidMount() {
		this.fetchData();
	}

	componentDidUpdate(prevProps) {
		if (this.props.match.params.name !== prevProps.match.params.name)
			this.fetchData();
	}

	render() {
		const { country, borders } = this.state;
		const { theme } = this.props;
		if (country !== '') {
			return (
				<div className={`detail-container`}>
					<div className="detail-back-btn">
						<LinkButton value="/" theme={theme}>
							<i className="fas fa-long-arrow-alt-left icon"></i> Back
						</LinkButton>
					</div>
					<div className="detail-stats">
						<img className="detail-flag" alt="Flag" src={country.flag} />
						<div className={`detail-text-container ${theme}-text`}>
							<h1 className="heading">{country.name}</h1>
							<div className="detail-text">
								<div className="left">
									<p className="text">
										Native Name: <span>{country.nativeName}</span>
									</p>
									<p className="text">
										Population:
										<span>{country.population.toLocaleString()}</span>
									</p>
									<p className="text">
										Region: <span>{country.region}</span>
									</p>
									<p className="text">
										Sub Region: <span>{country.subregion}</span>
									</p>
									<p className="text">
										Capital: <span>{country.capital}</span>
									</p>
								</div>
								<div className="right">
									<p className="text">
										Top Level Domain: <span>{country.topLevelDomain}</span>
									</p>
									<p className="text">
										Currencies:{' '}
										<span>
											{country.currencies.map((e) => e.name).join(', ')}
										</span>
									</p>
									<p className="text">
										Languages:{' '}
										<span>
											{country.languages.map((e) => e.name).join(', ')}
										</span>
									</p>
								</div>
							</div>
							{borders.length > 1 ? (
								<div className="border">
									<p className="border-text">Border Countries:</p>
									<span className="border-btn">
										{borders.map((border, index) => (
											<LinkButton key={index} value={border} theme={theme}>
												{border}
											</LinkButton>
										))}
									</span>
								</div>
							) : (
								<div></div>
							)}
						</div>
					</div>
				</div>
			);
		} else return null;
	}
}

export default Details;
