import "./style.css";
import { html } from "./util.ts";

const climapLogo = "/clipmap.png";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = html`
	<div class="section-bg-primary">
		<img src="${climapLogo}" class="main-logo" />
		<h2>Capteur intelligent, conditions idéales garanties</h2>
	</div>
	<div class="section-bg-secondary">
		<div class="section-content">
			<p class="center-text ">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
				dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
				ex ea commodo consequat. [Inserer texte “Et si”]
			</p>
		</div>
		<div class="section-content">
			<div class="content-flex-h">
				<img src="map_example.png" class="map-img" />
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
					et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. [Inserer texte “imaginez”]
				</p>
			</div>
		</div>
	</div>
	<div class="section-bg-primary">
		<div class="section-content">
			<h2>Capteur</h2>
		</div>
	</div>
`;

// setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
