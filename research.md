---
layout: page
title: Research
published: true
---
{% comment %}
  Research page, rewritten by the themes of the research statement (main_by_science.tex), co-written with
  the author one section at a time (from 2026-11-08). No figure captions (author, 2026-11-08); students are
  named with their projects on the group page, not here. The old page (CMB / Light Relics / Inflation; its
  banner images were removed, 2026-11-08) is kept in the comment at the bottom.
{% endcomment %}

I study theoretical cosmology, including the cosmic microwave background, the early universe, and connections to high energy and particle physics.

You can see my publications on [INSPIRE](https://inspirehep.net/authors/1041642 "INSPIRE Publication List").

## Neutrinos and the Dark Sector

### The Cosmological Preference for Negative Neutrino Mass

<figure class="research-fig">
  <img src="{{ '/public/figures/negative_mnu.png' | relative_url }}" alt="The inferred sum of neutrino masses, with negative values allowed: CMB data alone and CMB with DESI both prefer a value below zero, below the minimum allowed by neutrino oscillations">
</figure>
{% comment %} Figure: cosmo-explorations/web/web_negative_mnu.py (DESI DR2 published intervals; replaces the paper figure mnu_dark_force.png, author 2026-11-08). {% endcomment %}

Neutrinos have mass, and massive neutrinos change both the expansion history of the universe and the growth of structure, which makes cosmology sensitive to the sum of their masses. Surprisingly, the most precise current data from the cosmic microwave background and baryon acoustic oscillations prefer a value below zero, which is unphysical for ordinary neutrinos and may be a hint of new physics. With collaborators, I have shown how this preference arises in the data and explored physical mechanisms that could explain it, including long-range interactions in the dark matter, primordial non-Gaussianity, and non-standard neutrino interactions. My group is now testing this further: Ph.D. student Joshua Perez is studying whether more general primordial fluctuations alter the preference, and Christopher Cook, now a Ph.D. student at UT Austin, and I are studying how early dark energy affects the cosmological measurement of neutrino mass.

<ul class="papers sans">
  <li>N. Craig, D. Green, J. Meyers, and S. Rajendran, <a href="https://arxiv.org/abs/2405.00836">No &nu;s is Good News</a>, JHEP 09 (2024) 097</li>
  <li>D. Green and J. Meyers, <a href="https://arxiv.org/abs/2407.07878">Cosmological preference for a negative neutrino mass</a>, Phys. Rev. D 111 (2025) 083507</li>
  <li>P. W. Graham, D. Green, and J. Meyers, <a href="https://arxiv.org/abs/2508.20999">New interpretations of the cosmological preference for a negative neutrino mass</a>, Phys. Rev. D 113 (2026) 043514</li>
</ul>

### Light Relics and Dark Sector Physics

<figure class="research-fig">
  <img src="{{ '/public/figures/neff_damping_phase.png' | relative_url }}" alt="CMB temperature power spectrum for different amounts of radiation: more radiation damps the small-scale peaks and, with the damping matched, shifts the peaks to larger angular scales">
</figure>

Light relics are light particles that were produced abundantly in the hot early universe, like the three species of neutrinos of the Standard Model. The neutrinos fell out of equilibrium about one second after the Big Bang, but they remain extremely numerous today, making up the cosmic neutrino background. The gravitational influence of light relics leaves observable signatures in the cosmic microwave background and large-scale structure, so measuring their density probes neutrino physics and very weakly interacting particles beyond the Standard Model. I showed that free-streaming radiation shifts the phase of the acoustic peaks in the CMB, a robust signature that has since been measured in CMB and DESI BAO data. I have also studied how comparing the light relic density measured in the CMB with the abundances of light elements produced in big bang nucleosynthesis tests new physics in the early universe. Simons Observatory will substantially improve these measurements, sharpening tests of dark sector physics and of whether light relics play a role in the preference for negative neutrino mass.

<ul class="papers sans">
  <li>D. Baumann, D. Green, J. Meyers, and B. Wallisch, <a href="https://arxiv.org/abs/1508.06342">Phases of New Physics in the CMB</a>, JCAP 01 (2016) 007</li>
  <li>D. Green et al., <a href="https://arxiv.org/abs/1903.04763">Messengers from the Early Universe: Cosmic Neutrinos and Other Light Relics</a>, Bull. Am. Astron. Soc. 51 (2019) 159</li>
  <li>E. Grohs, J. R. Bond, R. J. Cooke, G. M. Fuller, J. Meyers, and M. W. Paris, <a href="https://arxiv.org/abs/1903.09187">Big Bang Nucleosynthesis and Neutrino Cosmology</a>, Bull. Am. Astron. Soc. 51 (2019) 412</li>
</ul>

{% comment %} Figure: simplified web version of Fig. 3 of the CnuB review (cosmo-explorations/web/web_neff_damping_phase.py). Cleared for the live site by the author (2026-11-08), though derived from a review figure. {% endcomment %}

## Enhancing the Value of CMB Surveys

### CMB Delensing

<figure class="research-fig wide">
  <video autoplay loop muted playsinline poster="{{ '/public/figures/lensing_teb_poster.jpg' | relative_url }}" aria-label="A simulated patch of the CMB in temperature, E-mode and B-mode polarization, with gravitational lensing turned slowly off and on">
    <source src="{{ '/public/figures/lensing_teb.mp4' | relative_url }}" type="video/mp4">
  </video>
</figure>

Gravitational lensing by the large-scale structure between us and the surface of last scattering distorts our view of the primary CMB fluctuations. Lensing smooths the acoustic peaks, converts E-mode polarization into B modes, and introduces correlations between scales, all of which weaken constraints on the parameters best measured through the primary CMB. Delensing reverses these effects: the lensing deflection is reconstructed from the CMB maps themselves, or traced with other observations of large-scale structure, and its effects are then removed. Removing lensing B modes is essential in the search for primordial gravitational waves, and delensing the temperature and E-mode polarization sharpens measurements of light relics, of inflation, and of models proposed to resolve the Hubble tension. Because delensing uses the same data a survey collects anyway, it comes at no additional experimental cost; in some cases, the improvement is comparable to halving the noise level of the experiment. Delensing of temperature and E modes has now been carried out on real data by ACT and SPT-3G.

<ul class="papers sans">
  <li>D. Green, J. Meyers, and A. van Engelen, <a href="https://arxiv.org/abs/1609.08143">CMB Delensing Beyond the B Modes</a>, JCAP 12 (2017) 005</li>
  <li>S. C. Hotinli, J. Meyers, C. Trendafilova, D. Green, and A. van Engelen, <a href="https://arxiv.org/abs/2111.15036">The benefits of CMB delensing</a>, JCAP 04 (2022) 020</li>
  <li>J. Ange and J. Meyers, <a href="https://arxiv.org/abs/2307.01662">Improving constraints on models addressing the Hubble tension with CMB delensing</a>, JCAP 10 (2023) 045</li>
  <li>C. Trendafilova, S. C. Hotinli, and J. Meyers, <a href="https://arxiv.org/abs/2312.02954">Improving constraints on inflation with CMB delensing</a>, JCAP 06 (2024) 017</li>
</ul>

{% comment %} Animation: cosmo-explorations/web/web_lensing.py (--field TEB). {% endcomment %}

### New Probes of Cosmic Structure

<figure class="research-fig wide">
  <img src="{{ '/public/figures/moving_lens.png' | relative_url }}" alt="Illustration of the moving lens effect: several galaxy clusters moving across the sky in different directions, each leaving a temperature dipole, cooler ahead of the cluster and hotter behind">
</figure>

Lensing is also challenging to measure on the smallest angular scales: at multipoles above a few thousand, standard lensing reconstruction methods become suboptimal for low-noise surveys. The Small Correlated Against Large Estimator (SCALE) instead measures how lensing ties the local small-scale power of the CMB temperature to the large-scale temperature gradient. For upcoming surveys, SCALE can outperform standard methods, and the small-scale lensing amplitude it measures is sensitive to neutrino mass and to models such as warm or fuzzy dark matter that suppress structure on small scales.

The CMB also carries other imprints of the structure it passes on its way to us. When a massive structure such as a galaxy cluster moves across our line of sight, its lensing of the CMB leaves a small temperature dipole aligned with its motion: cooler ahead of the cluster and hotter behind. Combined with galaxy surveys, this moving lens effect gives access to the transverse velocities of cosmological structures, and together with the kinetic Sunyaev-Zel'dovich effect it could map the three-dimensional velocity field of the universe. The moving lens effect has now been [detected for the first time](https://arxiv.org/abs/2605.18938), at 4.8σ, in ACT and DESI Legacy Surveys data.

Just after recombination, CMB photons also scatter off newly formed neutral hydrogen and helium. This Rayleigh scattering grows steeply with frequency (as ν<sup>4</sup>), giving a second, partly independent view of the last-scattering surface that can significantly improve constraints on light relics and the sum of neutrino masses. Atmospheric effects and astrophysical foregrounds make it hard to detect with experiments planned for this decade, but a future CMB satellite should be able to measure it with high significance.

<ul class="papers sans">
  <li>V. C. Chan, R. Hložek, J. Meyers, and A. van Engelen, <a href="https://arxiv.org/abs/2302.13350">Small Correlated Against Large Estimator (SCALE) for Cosmic Microwave Background Lensing</a>, Phys. Rev. D 109 (2024) 043527</li>
  <li>V. C. Chan, R. Hložek, J. Meyers, and A. van Engelen, <a href="https://arxiv.org/abs/2409.05326">Running the small-correlated-against-large estimator at scale</a>, Phys. Rev. D 113 (2026) 023535</li>
  <li>S. C. Hotinli, J. Meyers, N. Dalal, A. H. Jaffe, M. C. Johnson, J. B. Mertens, M. Münchmeyer, K. M. Smith, and A. van Engelen, <a href="https://arxiv.org/abs/1812.03167">Transverse Velocities with the Moving Lens Effect</a>, Phys. Rev. Lett. 123 (2019) 061301</li>
  <li>S. C. Hotinli, M. C. Johnson, and J. Meyers, <a href="https://arxiv.org/abs/2006.03060">Optimal filters for the moving lens effect</a>, Phys. Rev. D 103 (2021) 043536</li>
  <li>B. Beringue, P. D. Meerburg, J. Meyers, and N. Battaglia, <a href="https://arxiv.org/abs/2008.11688">Cosmology with Rayleigh Scattering of the Cosmic Microwave Background</a>, JCAP 01 (2021) 060</li>
  <li>Y. Zhu, B. Beringue, S. K. Choi, N. Battaglia, P. D. Meerburg, and J. Meyers, <a href="https://arxiv.org/abs/2205.04496">Estimating the impact of foregrounds on the future detection of Rayleigh scattering</a>, JCAP 09 (2022) 048</li>
</ul>

{% comment %} Figure: cosmo-explorations/web/web_moving_lens.py --field (illustrative; high-pass filtered). {% endcomment %}

### Machine Learning Tools

<figure class="research-fig wide">
  <img src="{{ '/public/figures/resunet_cmb_architecture.png' | relative_url }}" alt="Architecture of the ResUNet-CMB network: maps of CMB polarization (Q and U) pass through convolutional and residual blocks, and the network outputs maps of cosmic polarization rotation and lensing convergence, among others">
</figure>

Machine learning offers ways to extract information from CMB maps that standard estimators leave behind. [ResUNet-CMB](https://github.com/EEmGuzman/resunet-cmb), a convolutional neural network, takes maps of CMB polarization and simultaneously reconstructs gravitational lensing, patchy reionization, and cosmic polarization rotation, along with the primary CMB fluctuations. It outperforms the standard quadratic estimator and matches the performance expected from iterative reconstruction methods. Applied to the search for primordial gravitational waves, the same network can estimate and remove several sources of secondary B-mode polarization at once, and its output can be used in a likelihood analysis to produce nearly optimal, unbiased estimates of the amplitude of primordial gravitational waves.

<ul class="papers sans">
  <li>E. Guzman and J. Meyers, <a href="https://arxiv.org/abs/2101.01214">Reconstructing patchy reionization with deep learning</a>, Phys. Rev. D 104 (2021) 043529</li>
  <li>E. Guzman and J. Meyers, <a href="https://arxiv.org/abs/2109.09715">Reconstructing cosmic polarization rotation with ResUNet-CMB</a>, JCAP 01 (2022) 030</li>
  <li>E. Guzman and J. Meyers, <a href="https://arxiv.org/abs/2512.19577">Deep learning for primordial B-mode extraction</a>, Phys. Rev. D 113 (2026) 063573</li>
</ul>

{% comment %} Figure: Fig. 1 of Guzman & Meyers 2022 (arXiv:2109.09715, ResUNet_CMB_4output_arch.pdf), rendered from the arXiv source; the ResUNet-CMB repo has only a PNG (the diagram was made with PlotNeuralNet). {% endcomment %}

## Gravitational Waves Across Frequencies

<figure class="research-fig wide">
  <img src="{{ '/public/figures/gw_landscape.png' | relative_url }}" alt="The gravitational-wave landscape from 10^-19 to 10^4 hertz: the spectrum of gravitational waves from inflation at today's bound, the signal seen by pulsar timing arrays, the LIGO-Virgo-KAGRA limit and the planned LISA sensitivity, and the frequency ranges covered by CMB B modes, pulsar timing arrays, CMB time-dependent deflection, a gravitational-wave timing array, LISA, and LIGO-Virgo-KAGRA">
</figure>

Gravitational waves offer a window onto fundamental physics across an enormous range of frequencies. At the lowest frequencies, gravitational waves produced during cosmic inflation would leave a distinctive pattern of B-mode polarization in the CMB. Detecting it would reveal the energy scale of inflation, but the signal is faint and lies beneath the B modes produced by gravitational lensing, which makes delensing essential. B-mode measurements from Simons Observatory, together with constraints on primordial non-Gaussianity, will sharpen tests of the physics that drove inflation.

At nanohertz frequencies, pulsar timing arrays have found evidence for a background of gravitational waves. Supermassive black hole binaries are the expected source, but the signal could also come from the early universe: for example, gravitational waves from inflation, amplified by a period of kination in which the expansion was dominated by the kinetic energy of a scalar field, can also fit current data. Gravitational waves can also be found in data collected for other purposes. A gravitational wave passing the Earth shifts the apparent positions of distant sources in a correlated, time-dependent pattern, and time-dependent deflection reconstruction searches for this pattern in CMB maps, extending sensitivity to frequencies both below and above those covered by pulsar timing arrays. Precise timing of strongly lensed repeating fast radio bursts, or of the continuous gravitational waves from Galactic binaries seen by a space-based detector like LISA, can likewise reveal long-wavelength gravitational waves.

<ul class="papers sans">
  <li>N. Pearson, C. Trendafilova, and J. Meyers, <a href="https://arxiv.org/abs/2009.11252">Searching for Gravitational Waves with Strongly Lensed Repeating Fast Radio Bursts</a>, Phys. Rev. D 103 (2021) 063017</li>
  <li>M. J. Bustamante-Rosell, J. Meyers, N. Pearson, C. Trendafilova, and A. Zimmerman, <a href="https://arxiv.org/abs/2107.02788">Gravitational wave timing array</a>, Phys. Rev. D 105 (2022) 044005</li>
  <li>B. Li, J. Meyers, and P. R. Shapiro, <a href="https://arxiv.org/abs/2503.18937">Multimodality in the Search for New Physics in Pulsar Timing Data and the Case of Kination-amplified Gravitational-wave Background from Inflation</a>, Astrophys. J. 985 (2025) 117</li>
  <li>A. Leluc, J. Meyers, and A. van Engelen, <a href="https://arxiv.org/abs/2508.10673">Time-dependent deflection reconstruction: new technique to search for gravitational waves with the cosmic microwave background</a>, JCAP 01 (2026) 053</li>
</ul>

{% comment %} Figure: cosmo-explorations/web/web_gw_landscape.py (sources in its docstring). {% endcomment %}

## Collaborations

I am a member of the [Simons Observatory](https://simonsobservatory.org/ "SO Website"), [CCAT-prime](https://www.ccatobservatory.org/ "CCAT Website"), [CMB-HD](https://cmb-hd.org/ "CMB-HD Website"), and [PICO](https://sites.google.com/umn.edu/picomission/home "PICO Website") collaborations.  I was a member of [CMB-S4](https://cmb-s4.org/ "S4 Website") from 2015 until the collaboration wound down, serving as Co-Chair of its Science Council from 2020 to 2024.

{% comment %}
Old research page (before 2026-11-08), kept for reference; its text is raw material for the new sections.

I study theoretical cosmology, including the cosmic microwave background, the early universe, and connections to high energy and particle physics.

You can see my publications on [INSPIRE](https://inspirehep.net/authors/1041642 "INSPIRE Publication List").



## Cosmic Microwave Background

Since the discovery of the cosmic microwave background (CMB) in 1964, measurements of the CMB have completely transformed our understanding of the history and contents of the universe.  Ongoing and future observations of the CMB will continue to play a primary role in the development of modern cosmology.  I am a member of the [Simons Observatory](https://simonsobservatory.org/ "SO Website"), [CCAT-prime](https://www.ccatobservatory.org/ "CCAT Website"), [CMB-HD](https://cmb-hd.org/ "CMB-HD Website"), and [PICO](https://sites.google.com/umn.edu/picomission/home "PICO Website") collaborations.  I was a member of [CMB-S4](https://cmb-s4.org/ "S4 Website") from 2015 until the collaboration wound down, serving as Co-Chair of its Science Council from 2020 to 2024.



## Light Relics

One of the key observational targets of the next generation of cosmological surveys is a measurement of the light relic energy density.  The term 'light relics' refers to the collection of relativistic low-mass particles which were produced abundantly in the early universe.  During the early phase of the current hot Big Bang expansion, the universe was filled with an extremely dense thermal plasma which was so hot that even very weakly interacting particles were in thermal equilibrium.  This includes, for example, the three species of neutrinos of the Standard Model of particle physics.  The neutrinos fell out of equilibrium after about one second of expansion, however they remain extremely numerous today, making up the cosmic neutrino background.  The gravitational influence of light relics has left observable signatures in the CMB and large scale structure, allowing cosmological observations to serve as a probe of neutrino physics and very weakly interacting particles beyond the Standard Model.  Some of my research is devoted to developing the tools necessary to exploit cosmological observations to constrain particle physics, using the early universe as the ultimate high luminosity experiment. 



## Inflation

An extremely rapid, nearly exponential expansion of space, known as cosmic inflation, is thought to have occurred in the very early universe.  Quantum fluctuations in the fields that drove this expansion provided the seeds for the cosmological structure observed in the universe today.  The next generation of cosmological surveys seek to find signatures of cosmic inflation and to determine the physics responsible for generating this phase of expansion in the early universe.  Part of my research focuses on determining how to best utilize observations to inform our understanding of the early universe.

{% endcomment %}
