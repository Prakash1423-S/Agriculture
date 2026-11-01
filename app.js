/**
 * AgriPulse AI - Interactive Application Logic
 * Agricultural Q&A Advisory, Geo-Spatial Problem Solver, and Case Study Explorer
 */

// ==========================================
// 1. DATA: Geo-Agricultural Problems Matrix
// ==========================================
const GEO_PROBLEMS_DATA = [
  {
    id: "ind-pb-01",
    country: "India",
    state: "Punjab & Haryana",
    category: "water",
    title: "Groundwater Depletion & Stubble Burning Crisis",
    severity: "critical",
    crop: "Paddy & Wheat",
    rootCause: "Free agricultural electricity driving flood irrigation of summer transplanted paddy; narrow 20-day window between paddy harvest and wheat sowing prompting field burning.",
    agronomicSolution: "Adopt Direct Seeded Rice (DSR) with short-duration PR-126 variety (matures in 120 days). Deploy Happy Seeder / Super SMS combine harvesters for in-situ residue mulching.",
    techSolution: "Sentinel-3 thermal satellite burning detection; soil tensiometer IoT probes delivering automated canal water scheduling alerts.",
    policySupport: "Incentive of ₹1,500/acre for DSR adoption; 50-80% subsidy on in-situ crop residue machinery under CRM scheme.",
    roi: "30% water conservation, saves ₹4,200/acre in pumping energy, zero stubble fines."
  },
  {
    id: "ind-mh-01",
    country: "India",
    state: "Maharashtra (Vidarbha & Marathwada)",
    category: "pest",
    title: "Pink Bollworm Epidemic on Rainfed Cotton",
    severity: "high",
    crop: "Cotton (Bt Hybrids)",
    rootCause: "Resistance to transgenic Cry1Ac/Cry2Ab Bt-endotoxins developed by Pectinophora gossypiella due to prolonged ratoon crops and illegal cocktail sprays.",
    agronomicSolution: "High-Density Planting System (HDPS) with non-Bt compact varieties finishing within 150 days. Install 5 pheromone traps per acre and release Trichogramma egg parasitoids.",
    techSolution: "PB-Rope mating disruption dispensers + AgriPulse automated mobile trap counting using edge computer vision.",
    policySupport: "State Cotton Mission subsidies for pheromone grids; PM Fasal Bima Yojana automatic satellite-triggered payouts.",
    roi: "Reduces pesticide sprays by 45%, recovers 3-5 quintals/acre yield (₹18,000 extra net income)."
  },
  {
    id: "ind-rj-01",
    country: "India",
    state: "Rajasthan (Western Thar Desert)",
    category: "soil",
    title: "Extreme Desertification & Hyper-Aridity",
    severity: "high",
    crop: "Millets, Pulses, Arid Fruits",
    rootCause: "Coarse sandy soil with organic carbon <0.15%, intense summer evapotranspiration (10-12 mm/day), and groundwater salinity.",
    agronomicSolution: "Intercropping Bajra (Pearl Millet) with Cluster Bean (Guar) for biological nitrogen fixation. Shift to high-value arid crops: Date Palm (Tissue culture), Pomegranate (Bhagwa), and Ber.",
    techSolution: "Solar-powered subsurface porous drip lines delivering water directly to root depths; potassium polyacrylate hydrogels retaining 400x water.",
    policySupport: "PM-KUSUM Component-B 60% subsidy on standalone off-grid solar irrigation pumps.",
    roi: "Drip saves 65% water; arid horticulture triples farmer annual income per hectare."
  },
  {
    id: "ind-up-01",
    country: "India",
    state: "Uttar Pradesh & Bihar",
    category: "climate",
    title: "Monsoon Inundation & Severe Cold Waves",
    severity: "high",
    crop: "Paddy, Pulses, Vegetables",
    rootCause: "Kosi/Gangetic flood overflow submerging lowlands for 14-25 days, followed by severe winter frost damaging rabi mustard and potatoes.",
    agronomicSolution: "Deploy Swarna-Sub1 and Bina-Dhan 11 submergence-tolerant rice varieties that survive 14 days under complete water submergence. Zero-tillage relay sowing of lentils into standing wet silt.",
    techSolution: "Localized micro cold storage units powered by solar-biomass hybrid chillers to prevent 35% vegetable rot.",
    policySupport: "Kisan Credit Card (KCC) instant disaster buffer line; PM Formalisation of Micro food processing Enterprises (PMFME).",
    roi: "Prevents total crop loss during flood years, saving ₹25,000/hectare."
  },
  {
    id: "ind-ap-01",
    country: "India",
    state: "Andhra Pradesh & Telangana",
    category: "pest",
    title: "Invasive Black Thrips Outbreak in Chilli & Cotton",
    severity: "critical",
    crop: "Chilli & Cotton",
    rootCause: "Thrips parvispinus proliferation aided by unscientific cocktail pesticide overuse that eradicated predatory mites and spiders.",
    agronomicSolution: "Erect 35-40 blue and yellow sticky traps per acre at canopy level. Spray bio-insecticides Beauveria bassiana (5g/L) during humid evening hours.",
    techSolution: "AgriPulse optical leaf scanner for nymph density tracking; drone-assisted micro-droplet targeted biological spraying.",
    policySupport: "Rythu Bharosa Kendra (RBK) integrated bio-input distribution.",
    roi: "Saves ₹15,000/acre in futile chemical sprays; restores fruit-setting by 70%."
  },
  {
    id: "ind-kl-01",
    country: "India",
    state: "Kerala & Western Ghats",
    category: "soil",
    title: "Extreme Soil Acidity & Monsoon Phytophthora Rot",
    severity: "high",
    crop: "Black Pepper, Spices, Rubber",
    rootCause: "Heavy torrential rainfall leaching calcium and magnesium, dropping soil pH below 4.8; warm saturated soils fueling fungal foot rot.",
    agronomicSolution: "Apply agricultural dolomite (350 kg/hectare) 3 weeks before monsoon to buffer pH. Bio-drench roots with Trichoderma harzianum colonized neem cake.",
    techSolution: "IoT leaf-wetness sensors forecasting fungal spore discharge 48 hours prior to infestation.",
    policySupport: "Spices Board replanting subsidies and subsidized soil testing cards.",
    roi: "Reduces vine mortality from 40% to under 5%, preserving multi-year plantation capital."
  },
  {
    id: "usa-ca-01",
    country: "United States",
    state: "California (Central Valley)",
    category: "water",
    title: "Groundwater Overdraft & SGMA Pumping Caps",
    severity: "critical",
    crop: "Almonds, Pistachios, Table Grapes",
    rootCause: "Multi-year megadroughts combined with mandatory 20-30% pumping restrictions under the California Sustainable Groundwater Management Act.",
    agronomicSolution: "Regulated Deficit Irrigation (RDI) tailored to specific hull-split and post-harvest growth phases.",
    techSolution: "OpenET Landsat satellite evapotranspiration integration; winter Managed Aquifer Recharge (Ag-MAR) flooding dormant orchards.",
    policySupport: "USDA NRCS Environmental Quality Incentives Program (EQIP) precision irrigation grants.",
    roi: "Achieves 22-28% water savings without commercial nut size degradation."
  },
  {
    id: "usa-mw-01",
    country: "United States",
    state: "Midwest Corn Belt (Iowa, Illinois)",
    category: "soil",
    title: "Topsoil Nutrient Leaching & Gulf Hypoxia",
    severity: "high",
    crop: "Corn & Soybeans",
    rootCause: "Bare winter soils and broadcast spring nitrogen leading to severe nitrate tile drainage runoff into the Mississippi river basin.",
    agronomicSolution: "Over-seeding winter cover crop cocktail (cereal rye + hairy vetch) before corn harvest. Variable Rate Nitrogen injection based on real-time soil EC.",
    techSolution: "AgriPulse drone multi-spectral NDVI nitrogen prescriptive maps; edge-of-field denitrifying woodchip bioreactors.",
    policySupport: "USDA Conservation Reserve Program (CRP) & carbon credit sequestration incentives ($30/acre).",
    roi: "Reduces synthetic fertilizer expenditure by $45/acre; prevents soil erosion."
  },
  {
    id: "ken-rv-01",
    country: "Kenya",
    state: "Rift Valley & Eastern",
    category: "pest",
    title: "Fall Armyworm & Smallholder Tech Access Deficit",
    severity: "critical",
    crop: "Maize & Sorghum",
    rootCause: "Spodoptera frugiperda caterpillar rapid reproduction across warm equatorial cycles; lack of rural 4G smartphones.",
    agronomicSolution: "Push-Pull agro-ecological planting: intercrop Desmodium inside rows (repels moths) and plant Napier grass along perimeter (traps caterpillars).",
    techSolution: "AgriPulse 2G USSD (*384#) and voice AI advisory in Swahili; decentralized solar ColdHubs for surplus preservation.",
    policySupport: "Kenya Agriculture & Food Authority (AFA) emergency bio-control vouchers.",
    roi: "Recovers up to 55% maize grain yield for smallholders without expensive chemical dependencies."
  },
  {
    id: "vnm-mk-01",
    country: "Vietnam",
    state: "Mekong Delta",
    category: "water",
    title: "Upstream Damming & Marine Salinization",
    severity: "critical",
    crop: "Rice & Aquaculture",
    rootCause: "Reduced dry-season Mekong discharge combined with sea-level rise driving saline water 70 km inland into freshwater paddy paddies.",
    agronomicSolution: "Shift to Rice-Shrimp rotational farming: salt-tolerant ST25 rice during rainy months, giant tiger prawn culture in dry saline season.",
    techSolution: "Automated canal salinity conductivity telemetry with SMS alerts stopping farmers from opening sluices during salt peaks.",
    policySupport: "Resolution 120 on Sustainable and Climate-Resilient Development of the Mekong Delta.",
    roi: "Increases household gross revenue by 120% through premium organic black tiger shrimp export."
  },
  {
    id: "esp-al-01",
    country: "Spain",
    state: "Andalusia (Almería Greenhouse Sea)",
    category: "climate",
    title: "Intense Heat Waves & Saline Coastal Aquifers",
    severity: "high",
    crop: "Tomatoes, Peppers, Cucumbers",
    rootCause: "Intensive 30,000-hectare plastic greenhouse cluster pumping brackish groundwater; extreme summer temperatures exceeding 42°C.",
    agronomicSolution: "Closed-loop hydroponic substrate culture with 100% drainage water capture and UV sterilization.",
    techSolution: "Seawater reverse osmosis powered by rooftop solar panels; automated VPD (Vapor Pressure Deficit) fogging mist systems.",
    policySupport: "EU Common Agricultural Policy (CAP) Eco-Schemes funding circular water recycling.",
    roi: "95% water circularity, eliminates groundwater nitrate leaching."
  },
  {
    id: "bra-mt-01",
    country: "Brazil",
    state: "Mato Grosso (Cerrado Belt)",
    category: "pest",
    title: "Asian Soybean Rust (*Phakopsora pachyrhizi*)",
    severity: "high",
    crop: "Soybeans & Maize",
    rootCause: "Airborne fungal spores traveling hundreds of kilometers across humid tropical winds, defoliating plants in 10-14 days.",
    agronomicSolution: "Strict enforcement of the 90-day host-free sanitary period (Vazio Sanitário). Apply multi-site protective fungicides (Mancozeb) before canopy closure.",
    techSolution: "Satellite wind trajectory atmospheric spore dispersal modeling predicting spore arrival 7 days ahead.",
    policySupport: "Embrapa national coordinated rust monitoring network.",
    roi: "Prevents catastrophic 60-80% crop defoliation, protecting export yields."
  }
];

// ==========================================
// 2. DATA: Comprehensive Agricultural Q&A Knowledge
// ==========================================
const PRECONFIGURED_QA = [
  {
    keywords: ["yellow", "curl", "tomato", "leaf"],
    title: "Tomato Leaf Curl Virus (ToLCV) & Nutrient Chlorosis",
    severity: "high",
    diagnosis: "Tomato leaves showing curling and yellow margins is characteristic of Tomato Leaf Curl Virus transmitted by Whiteflies (Bemisia tabaci), often aggravated by Magnesium or Nitrogen deficiency in alkaline soils.",
    actions: [
      { category: "Immediate Action", text: "Uproot and bury severely stunted viral plants immediately to stop field vector spread.", dosage: "Field sanitation within 24h" },
      { category: "Organic Vector Control", text: "Spray cold-pressed Neem Oil (Azadirachtin 10,000 ppm) + install 15 yellow sticky traps per acre.", dosage: "3 ml / Liter of water" },
      { category: "Chemical Rescue", text: "Foliar spray of Diafenthiuron 50% WP or Spiromesifen 22.9% SC targeting whitefly nymphs on leaf undersides.", dosage: "1.25 g / Liter (PHI: 7 days)" },
      { category: "Soil & Nutrient Correction", text: "Foliar spray of Magnesium Sulphate (MgSO4) + 19:19:19 to correct interveinal chlorosis.", dosage: "5g MgSO4 + 5g 19:19:19 per liter" }
    ],
    scientificBasis: "ToLCV is a Begomovirus. It requires systemic whitefly vector control at early vegetative stages before flowering.",
    scheme: "Mission for Integrated Development of Horticulture (MIDH) - 40% shade net house subsidies.",
    citations: ["Indian Institute of Horticultural Research (IIHR) Tomato Advisory", "UC Davis IPM Tomato Pest Management Guidelines"]
  },
  {
    keywords: ["cotton", "pink", "bollworm", "flower", "rosette"],
    title: "Pink Bollworm (*Pectinophora gossypiella*) Management in Cotton",
    severity: "critical",
    diagnosis: "Rosette flowers and damaged green bolls indicate Pink Bollworm infestation. Caterpillars bore into developing bolls within 45 minutes of hatching, locking themselves inside away from surface sprays.",
    actions: [
      { category: "Immediate Action", text: "Hand-pick and destroy rosette flowers containing larvae; install 5 monitoring pheromone traps/acre.", dosage: "Daily inspection" },
      { category: "Bio-Control Intervention", text: "Release Trichogramma bactrae egg parasitoid cards @ 60,000 parasitized eggs/acre at 7-day intervals.", dosage: "3 releases starting at 45 DAS" },
      { category: "Mating Disruption", text: "Deploy PB-Rope dispensers (200 ropes/acre) to confuse male moths and halt reproduction.", dosage: "200 dispensers/acre" },
      { category: "Chemical Option (Only if >10% damaged bolls)", text: "Targeted spray of Chlorantraniliprole 18.5% SC or Emamectin Benzoate 5% SG.", dosage: "0.3 ml/L or 0.5 g/L" }
    ],
    scientificBasis: "Pink bollworm larvae feed inside the cottonseed, destroying lint quality and causing fungal boll rot.",
    scheme: "Central Institute for Cotton Research (CICR) High-Density Planting & IPM Campaign.",
    citations: ["ICAR-CICR Nagpur Pink Bollworm Management Advisory Bulletin", "FAO Global Cotton Pest Compendium"]
  },
  {
    keywords: ["drip", "irrigation", "schedule", "sandy", "water"],
    title: "Precision Drip Irrigation Scheduling for Sandy Loam Soil",
    severity: "moderate",
    diagnosis: "Sandy loam soils have high hydraulic conductivity and low water retention (field capacity ~14-18%). Flood irrigation causes 45% deep percolation loss below the effective root zone.",
    actions: [
      { category: "Irrigation Strategy", text: "Switch from single heavy weekly irrigation to pulsed split irrigation (2-3 short pulses per day).", dosage: "Pulse duration: 35-45 minutes" },
      { category: "Automation Trigger", text: "Maintain soil matric potential between -15 to -25 kPa measured via tensiometers placed at 15cm and 30cm depths.", dosage: "Irrigate when tension reaches -25 kPa" },
      { category: "Fertigation Integration", text: "Inject water-soluble fertilizers in the middle third of the irrigation cycle to prevent nutrient leaching.", dosage: "Split into 12 weekly doses" },
      { category: "Mulching Protocol", text: "Apply 25-micron silver-black plastic mulch or organic straw mulch to cut soil evaporation by 60%.", dosage: "Full bed coverage" }
    ],
    scientificBasis: "Pulsing water prevents gravitational drainage past the root zone, maximizing horizontal capillary wetting bulb diameter.",
    scheme: "PM Krishi Sinchayee Yojana (PMKSY) - Per Drop More Crop (up to 55% subsidy for smallholders).",
    citations: ["FAO Irrigation and Drainage Paper No. 56 (Crop Evapotranspiration)", "USDA NRCS Irrigation Guide"]
  },
  {
    keywords: ["punjab", "groundwater", "stubble", "paddy", "depletion"],
    title: "Punjab Sustainable Groundwater & Zero-Stubble Strategy",
    severity: "critical",
    diagnosis: "Long-term groundwater over-draft (160% extraction ratio) in Central Punjab driven by conventional puddle transplanted rice, alongside straw burning due to tight turnaround for rabi wheat.",
    actions: [
      { category: "Immediate Rice Agronomy", text: "Adopt Tar-Vattar Direct Seeded Rice (DSR) using lucky seed drill or laser land leveler.", dosage: "Seed rate: 8-10 kg/acre (PR-126)" },
      { category: "In-situ Stubble Mulching", text: "Use Happy Seeder or Smart Seeder to sow wheat directly into standing paddy residue without prior burning.", dosage: "Wheat seed @ 45 kg/acre" },
      { category: "Bio-Decomposer Spray", text: "Apply Pusa Bio-Decomposer fungal capsule solution onto chopped stubble to accelerate decomposition.", dosage: "4 capsules brewed in 25L jaggery water/acre" },
      { category: "Crop Diversification", text: "Shift 20% paddy acreage to Basmati (less water intensive), Maize, or Summer Moong pulses.", dosage: "Diversification target: 1 million hectares" }
    ],
    scientificBasis: "DSR saves 20-30% irrigation water by eliminating continuous submergence and avoids soil crusting puddling destruction.",
    scheme: "Sub-Mission on Agricultural Mechanization (SMAM) - Custom Hiring Centers for stubble management.",
    citations: ["Punjab Agricultural University (PAU) Ludhiana Package of Practices", "CGIAR-BISA Conservation Agriculture Reports"]
  },
  {
    keywords: ["armyworm", "fall", "maize", "corn"],
    title: "Fall Armyworm (*Spodoptera frugiperda*) in Maize",
    severity: "critical",
    diagnosis: "Pinholes, window pane feeding, and sawdust-like frass inside the central maize leaf whorl indicate Fall Armyworm. Larvae feed deep in the whorl, protected from non-directed sprays.",
    actions: [
      { category: "Immediate Field Cultural Action", text: "Apply a mixture of fine sand and wood ash (1:1 ratio) or dry soil directly into the central plant whorl.", dosage: "1 pinch per plant whorl" },
      { category: "Bio-Pesticide Application", text: "Spray Metarhizium rileyi or Bacillus thuringiensis (Bt kurstaki) formulation into whorls late in the day.", dosage: "2.5 g / Liter of water" },
      { category: "Companion Push-Pull Planting", text: "Intercrop with Silverleaf Desmodium and surround field borders with Napier grass.", dosage: "Desmodium 1 row per 3 maize rows" },
      { category: "Targeted Chemical Rescue", text: "Directed whorl spray of Spinetoram 11.7% SC or Novaluron 10% EC using knapsack sprayer with cone nozzle.", dosage: "0.5 ml / Liter (PHI: 14 days)" }
    ],
    scientificBasis: "Early instar larvae are susceptible; once 5th-6th instars bore into cobs, chemical efficacy drops below 20%.",
    scheme: "FAO Global Action for Fall Armyworm Control & State Emergency Pest Subsidies.",
    citations: ["CIMMYT Fall Armyworm in Africa & Asia Technical Manual", "ICAR-NBAIR Biocontrol Guidelines"]
  },
  {
    keywords: ["salinity", "soil", "salt", "california", "gypsum"],
    title: "Soil Salinity & Sodicity Reclamation Protocol",
    severity: "high",
    diagnosis: "White salt crusts on soil surface, poor germination, and leaf tip burn signify high Electrical Conductivity (EC > 4 dS/m) or high Sodium Adsorption Ratio (SAR > 13).",
    actions: [
      { category: "Soil Amendment", text: "Apply agricultural Gypsum (CaSO4·2H2O) to displace sodium ions with calcium on clay exchange sites.", dosage: "Calculate via Gypsum Requirement test (~2-4 tons/ha)" },
      { category: "Leaching Cycle", text: "Perform ponded freshwater leaching post-gypsum application through installed subsurface tile drainage.", dosage: "Apply 15-20 cm water head" },
      { category: "Organic Matter Infusion", text: "Incorporate Farmyard Manure (FYM) or green manure with Sesbania (Dhaincha) to improve soil aggregation.", dosage: "10-15 tons FYM / hectare" },
      { category: "Salt-Tolerant Variety Selection", text: "Plant salt-tolerant cultivars such as CSR-30/CSR-36 in rice or halophytic fodder grasses.", dosage: "Certified breeder seed" }
    ],
    scientificBasis: "Calcium from gypsum replaces toxic sodium, improving soil flocculation, porosity, and hydraulic percolation.",
    scheme: "National Mission on Sustainable Agriculture (NMSA) - Soil Health Card Scheme.",
    citations: ["ICAR-Central Soil Salinity Research Institute (CSSRI) Karnal Handbook", "FAO Soils Bulletin 39"]
  },
  {
    keywords: ["price", "market", "mandi", "sell", "onion", "wheat"],
    title: "AgriPulse Market Intelligence & Crop Monetization Strategy",
    severity: "low",
    diagnosis: "Agricultural commodity prices exhibit sharp seasonal cyclicality: gluts during peak harvest depress mandi prices, followed by price spikes during off-seasons.",
    actions: [
      { category: "Warehouse Receipt Financing", text: "Store graded grain/onion in WDRA-accredited warehouses and take an instant 70% pledge loan at 7% interest.", dosage: "Wait 60-90 days for peak prices" },
      { category: "e-NAM Multi-Mandi Arbitrage", text: "List electronic trading lots on the e-NAM (National Agriculture Market) platform to compare neighboring district mandis.", dosage: "Look for price spread > ₹250/quintal" },
      { category: "Value-Addition & Sorting", text: "Grade produce into Grade A (supermarket/export), Grade B (local wholesale), and Grade C (processing/puree).", dosage: "Boosts overall realized price by 25%" },
      { category: "Forward Contracts & FPOs", text: "Pool produce through Farmer Producer Organizations (FPOs) for direct procurement with institutional buyers.", dosage: "Direct institutional sale" }
    ],
    scientificBasis: "Direct-to-mandi distress selling immediately post-harvest sacrifices up to 40% of potential farmer margins.",
    scheme: "e-NAM electronic trading & Agriculture Infrastructure Fund (AIF) 3% interest subvention.",
    citations: ["Ministry of Agriculture & Farmers Welfare Price Trends", "WDRA Warehouse Guidelines"]
  }
];

// ==========================================
// 3. CORE LOGIC: Q&A Engine with Intelligent Synthesis
// ==========================================
function answerAgronomicQuestion(userQuery, userRegion = "General", userCrop = "All") {
  const qClean = userQuery.toLowerCase().trim();
  const queryWords = qClean.split(/\W+/).filter(w => w.length > 2);

  // 1. Check exact/fuzzy match against knowledge base
  let bestMatch = null;
  let highestScore = 0;

  for (const item of PRECONFIGURED_QA) {
    let score = 0;
    for (const kw of item.keywords) {
      if (qClean.includes(kw)) score += 3;
    }
    for (const w of queryWords) {
      if (item.keywords.some(k => k.includes(w) || w.includes(k))) score += 1;
      if (item.diagnosis.toLowerCase().includes(w)) score += 0.5;
    }
    if (score > highestScore) {
      highestScore = score;
      bestMatch = item;
    }
  }

  // If score is high enough, return the grounded match
  if (bestMatch && highestScore >= 3) {
    return bestMatch;
  }

  // 2. Otherwise: Dynamic Intelligent Agronomic Synthesis
  let detectedCrop = userCrop !== "All" ? userCrop : "Crop";
  if (qClean.includes("rice") || qClean.includes("paddy")) detectedCrop = "Rice (Paddy)";
  else if (qClean.includes("wheat")) detectedCrop = "Wheat";
  else if (qClean.includes("cotton")) detectedCrop = "Cotton";
  else if (qClean.includes("corn") || qClean.includes("maize")) detectedCrop = "Maize";
  else if (qClean.includes("potato")) detectedCrop = "Potato";
  else if (qClean.includes("soybean")) detectedCrop = "Soybean";
  else if (qClean.includes("chilli") || qClean.includes("pepper")) detectedCrop = "Chilli / Pepper";

  let isPest = qClean.includes("bug") || qClean.includes("worm") || qClean.includes("pest") || qClean.includes("insect") || qClean.includes("rot") || qClean.includes("fungus") || qClean.includes("blight");
  let isSoil = qClean.includes("soil") || qClean.includes("fertilizer") || qClean.includes("urea") || qClean.includes("npk") || qClean.includes("manure") || qClean.includes("ph");
  let isWater = qClean.includes("water") || qClean.includes("rain") || qClean.includes("irrigation") || qClean.includes("drought") || qClean.includes("drip");

  return {
    keywords: queryWords,
    title: `AgriPulse Agronomic Advisory: ${detectedCrop} Management`,
    severity: isPest ? "high" : (isWater ? "moderate" : "low"),
    diagnosis: `Diagnostic analysis for your inquiry regarding "${userQuery}". The symptoms described reflect typical stress indicators in ${detectedCrop} in the ${userRegion} agro-ecological zone. Immediate balanced field intervention is recommended to mitigate yield suppression.`,
    actions: [
      {
        category: "Step 1: Immediate Field Action (Next 24-48 Hours)",
        text: `Conduct a representative field survey across a 5-point zigzag pattern. Verify root zone moisture at 15cm and examine lower leaf undersides with a 10x hand lens.`,
        dosage: "Sample 20 plants across 1 acre"
      },
      {
        category: "Step 2: Biological / Organic Correction",
        text: isPest 
          ? "Apply botanical Neem formulation (Azadirachtin 10,000 ppm) combined with microbial bio-agent Trichoderma or Beauveria."
          : (isSoil ? "Incorporate well-decomposed Farm Yard Manure (FYM) enriched with Phosphorus Solubilizing Bacteria (PSB)." : "Apply organic crop mulch (paddy/wheat straw) at 5 cm thickness to lower soil temperature."),
        dosage: isPest ? "3 ml per liter of water" : "5 tons / hectare"
      },
      {
        category: "Step 3: Precision Nutrient / Treatment Protocol",
        text: isSoil
          ? "Follow targeted Soil Health Card recommendation: split Nitrogen into 3 equal doses (basal, tillering, panicle/flowering); do not broadcast urea on dry soil."
          : "Foliar booster spray of balanced water-soluble 19:19:19 + micronutrient chelated zinc (Zn-EDTA 12%) to restore metabolic vigor.",
        dosage: "19:19:19 @ 5g/L + Zn-EDTA @ 1g/L"
      },
      {
        category: "Step 4: Preventative & Climate Safeguards",
        text: "Ensure proper field drainage ditches to prevent root asphyxiation during flash rains. Maintain crop rotation with short-duration leguminous crops.",
        dosage: "Continuous season-long practice"
      }
    ],
    scientificBasis: "Grounding provided by FAO Good Agricultural Practices (GAP) and University Agricultural Extension Guidelines.",
    scheme: "Pradhan Mantri Krishi Sinchayee Yojana (PMKSY) & Soil Health Management Scheme.",
    citations: ["FAO International Agronomic Handbook", "National Agricultural Extension Protocols"]
  };
}

// ==========================================
// 4. UI CONTROLLER & EVENT LISTENERS
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  initTabs();
  initGeoMatrix();
  initChatEngine();
  initLeafScanner();
  initApiSimulator();
});

// Navigation Tabs
function initTabs() {
  const tabs = document.querySelectorAll(".nav-btn");
  const panes = document.querySelectorAll(".tab-pane");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const target = tab.getAttribute("data-tab");
      tabs.forEach(t => t.classList.remove("active"));
      panes.forEach(p => p.classList.remove("active"));

      tab.classList.add("active");
      const activePane = document.getElementById(target);
      if (activePane) activePane.classList.add("active");
    });
  });
}

// Chat Engine
function initChatEngine() {
  const chatMessages = document.getElementById("chatMessages");
  const chatForm = document.getElementById("chatForm");
  const chatInput = document.getElementById("chatInput");
  const chipButtons = document.querySelectorAll(".chip-btn");
  const regionSelect = document.getElementById("userRegionSelect");
  const cropSelect = document.getElementById("userCropSelect");

  // Handle Prompt Chips click
  chipButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const promptText = btn.getAttribute("data-prompt");
      chatInput.value = promptText;
      handleUserSubmit(promptText);
    });
  });

  // Handle Form Submit
  chatForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const query = chatInput.value.trim();
    if (!query) return;
    handleUserSubmit(query);
  });

  function handleUserSubmit(query) {
    chatInput.value = "";
    const region = regionSelect ? regionSelect.value : "India";
    const crop = cropSelect ? cropSelect.value : "General";

    // 1. Append User Message
    appendMessage("user", query);

    // 2. Append AI Thinking Indicator
    const thinkingId = appendThinkingIndicator();

    // 3. Process Response (with short simulated latency)
    setTimeout(() => {
      removeThinkingIndicator(thinkingId);
      const answer = answerAgronomicQuestion(query, region, crop);
      appendAiResponse(answer);
    }, 600);
  }

  function appendMessage(sender, text) {
    const wrapper = document.createElement("div");
    wrapper.className = `msg-wrapper ${sender}`;
    wrapper.innerHTML = `
      <div class="avatar ${sender === 'user' ? 'user-av' : 'ai-av'}">${sender === 'user' ? '👤' : '🌾'}</div>
      <div class="bubble"><p>${escapeHtml(text)}</p></div>
    `;
    chatMessages.appendChild(wrapper);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function appendThinkingIndicator() {
    const id = "think-" + Date.now();
    const wrapper = document.createElement("div");
    wrapper.id = id;
    wrapper.className = "msg-wrapper ai";
    wrapper.innerHTML = `
      <div class="avatar ai-av">🌾</div>
      <div class="bubble"><p><em>Analyzing agronomic data & regional university guidelines...</em></p></div>
    `;
    chatMessages.appendChild(wrapper);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    return id;
  }

  function removeThinkingIndicator(id) {
    const el = document.getElementById(id);
    if (el) el.remove();
  }

  function appendAiResponse(report) {
    const wrapper = document.createElement("div");
    wrapper.className = "msg-wrapper ai";

    let actionsHtml = "";
    report.actions.forEach(act => {
      let cardClass = "";
      let icon = "⚡";
      if (act.category.toLowerCase().includes("organic") || act.category.toLowerCase().includes("bio")) {
        cardClass = "organic"; icon = "🌿";
      } else if (act.category.toLowerCase().includes("chemical") || act.category.toLowerCase().includes("rescue")) {
        cardClass = "chemical"; icon = "🧪";
      } else if (act.category.toLowerCase().includes("prevention") || act.category.toLowerCase().includes("safeguard")) {
        cardClass = "prevention"; icon = "🛡️";
      }

      actionsHtml += `
        <div class="action-card ${cardClass}">
          <div class="card-tag">${icon} ${escapeHtml(act.category)}</div>
          <p>${escapeHtml(act.text)}</p>
          ${act.dosage ? `<div class="dosage"><strong>Dosage/Spec:</strong> ${escapeHtml(act.dosage)}</div>` : ''}
        </div>
      `;
    });

    wrapper.innerHTML = `
      <div class="avatar ai-av">🌾</div>
      <div class="bubble">
        <div class="advisory-report">
          <div class="report-header">
            <div>
              <div class="report-title">${escapeHtml(report.title)}</div>
              <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.2rem;">${escapeHtml(report.diagnosis)}</div>
            </div>
            <span class="badge-severity ${report.severity.toLowerCase()}">${report.severity}</span>
          </div>

          <div class="action-grid">
            ${actionsHtml}
          </div>

          <div class="report-footer">
            <span>🏛️ <strong>Eligible Scheme:</strong> ${escapeHtml(report.scheme || 'National Agro Extension Scheme')}</span>
            <span>📚 <strong>Source:</strong> ${escapeHtml(report.citations ? report.citations[0] : 'ICAR / FAO Field Database')}</span>
          </div>
        </div>
      </div>
    `;
    chatMessages.appendChild(wrapper);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
}

// Geo-Agricultural Matrix Explorer
function initGeoMatrix() {
  const container = document.getElementById("matrixGrid");
  const countryFilter = document.getElementById("geoCountryFilter");
  const categoryFilter = document.getElementById("geoCategoryFilter");
  const searchInput = document.getElementById("geoSearchInput");

  function renderCards() {
    if (!container) return;
    const country = countryFilter ? countryFilter.value : "ALL";
    const category = categoryFilter ? categoryFilter.value : "ALL";
    const search = searchInput ? searchInput.value.toLowerCase().trim() : "";

    const filtered = GEO_PROBLEMS_DATA.filter(item => {
      const matchCountry = (country === "ALL" || item.country.toLowerCase() === country.toLowerCase());
      const matchCategory = (category === "ALL" || item.category.toLowerCase() === category.toLowerCase());
      const matchSearch = (!search || 
        item.title.toLowerCase().includes(search) || 
        item.state.toLowerCase().includes(search) || 
        item.rootCause.toLowerCase().includes(search) ||
        item.agronomicSolution.toLowerCase().includes(search)
      );
      return matchCountry && matchCategory && matchSearch;
    });

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-muted);">
          <h3>No agricultural problem found matching this criteria.</h3>
          <p>Try clearing filters or search terms.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map(item => `
      <div class="problem-card">
        <div class="problem-card-header">
          <div class="problem-geo-tag">
            <span>📍 ${escapeHtml(item.country)} &bull; ${escapeHtml(item.state)}</span>
          </div>
          <span class="badge-severity ${item.severity}">${item.severity}</span>
        </div>

        <h3 class="problem-title">${escapeHtml(item.title)}</h3>
        <div style="font-size: 0.8rem; color: var(--accent-blue);">🌱 Primary Crops: ${escapeHtml(item.crop)}</div>

        <div class="problem-cause">
          <strong>Root Cause:</strong> ${escapeHtml(item.rootCause)}
        </div>

        <div class="solution-accordion">
          <div class="solution-box">
            <h5>🌾 Agronomic & Biological Solution</h5>
            <p>${escapeHtml(item.agronomicSolution)}</p>
          </div>
          <div class="solution-box">
            <h5>🛰️ Technology & IoT Intervention</h5>
            <p>${escapeHtml(item.techSolution)}</p>
          </div>
          <div class="solution-box">
            <h5>🏛️ Policy, Subsidy & Infrastructure</h5>
            <p>${escapeHtml(item.policySupport)}</p>
          </div>
        </div>

        <div class="problem-card-footer">
          <span class="roi-metric">📈 ROI / Benefit: ${escapeHtml(item.roi)}</span>
        </div>
      </div>
    `).join("");
  }

  if (countryFilter) countryFilter.addEventListener("change", renderCards);
  if (categoryFilter) categoryFilter.addEventListener("change", renderCards);
  if (searchInput) searchInput.addEventListener("input", renderCards);

  renderCards();
}

// Leaf Disease Scanner Simulator
function initLeafScanner() {
  const sampleButtons = document.querySelectorAll(".leaf-sample-btn");
  const radarIcon = document.getElementById("scanRadarIcon");
  const radarTitle = document.getElementById("scanRadarTitle");
  const radarStatus = document.getElementById("scanRadarStatus");
  const radarDetails = document.getElementById("scanRadarDetails");
  const triggerBtn = document.getElementById("triggerScanBtn");

  const SAMPLES = {
    tomato: {
      icon: "🍅",
      disease: "Tomato Early Blight (*Alternaria solani*)",
      confidence: "97.4%",
      severity: "High (18.2% foliage lesion)",
      rx: "Immediate foliar spray of Copper Oxychloride 50% WP @ 2.5g/L or Mancozeb 75% WP @ 2g/L. Remove lower diseased leaves touching soil.",
      organic: "Spray Bacillus subtilis formulation @ 5ml/L."
    },
    cotton: {
      icon: "🌱",
      disease: "Cotton Bacterial Blight / Angular Leaf Spot (*Xanthomonas*)",
      confidence: "94.8%",
      severity: "Moderate (9.5% lesion spread)",
      rx: "Copper Oxychloride (2.5g) + Streptocycline (100mg) per liter of water at 10-day intervals.",
      organic: "Pseudomonas fluorescens root and foliar treatment @ 10g/L."
    },
    rice: {
      icon: "🌾",
      disease: "Rice Leaf Blast (*Magnaporthe oryzae*)",
      confidence: "98.1%",
      severity: "Critical (Spindle-shaped lesions coalescing)",
      rx: "Foliar spray of Tricyclazole 75% WP @ 0.6g/L or Isoprothiolane 40% EC @ 1.5ml/L. Avoid high nitrogen fertilizer top-dressing.",
      organic: "Foliar bio-fungicide Trichoderma viride @ 5g/L."
    },
    corn: {
      icon: "🌽",
      disease: "Fall Armyworm (*Spodoptera*) Central Whorl Damage",
      confidence: "96.3%",
      severity: "Critical (Window paning & central frass)",
      rx: "Directed whorl spray of Chlorantraniliprole 18.5% SC @ 0.4ml/L or Emamectin Benzoate 5% SG @ 0.5g/L.",
      organic: "Insert sand + wood ash (1:1) pinch into leaf whorl; spray Metarhizium rileyi @ 3g/L."
    },
    healthy: {
      icon: "🌿",
      disease: "Healthy Citrus Foliage (No Pathogen Detected)",
      confidence: "99.2%",
      severity: "Optimal Health (0% lesions)",
      rx: "No chemical action required. Maintain balanced irrigation and preventive micronutrient zinc spray.",
      organic: "Continue regular soil organic compost replenishment."
    }
  };

  let activeSampleKey = "tomato";

  sampleButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      sampleButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeSampleKey = btn.getAttribute("data-sample");
      runScan(activeSampleKey);
    });
  });

  if (triggerBtn) {
    triggerBtn.addEventListener("click", () => {
      runScan(activeSampleKey);
    });
  }

  function runScan(sampleKey) {
    const data = SAMPLES[sampleKey];
    if (!data) return;

    radarIcon.textContent = "⏳";
    radarTitle.textContent = "Computer Vision Inference in Progress...";
    radarStatus.textContent = "Running YOLOv8-Nano leaf symptom segmentation...";
    if (radarDetails) radarDetails.style.display = "none";

    setTimeout(() => {
      radarIcon.textContent = data.icon;
      radarTitle.textContent = data.disease;
      radarStatus.textContent = `Confidence Score: ${data.confidence} | Severity: ${data.severity}`;
      
      if (radarDetails) {
        radarDetails.style.display = "block";
        radarDetails.innerHTML = `
          <div style="background: var(--bg-card); border: 1px solid var(--border); padding: 1rem; border-radius: var(--radius-md); text-align: left; margin-top: 1rem;">
            <div style="font-size: 0.85rem; color: #34d399; font-weight: 700; margin-bottom: 0.3rem;">💊 Prescribed Treatment:</div>
            <p style="font-size: 0.82rem; color: var(--text-main); margin-bottom: 0.5rem;">${escapeHtml(data.rx)}</p>
            <div style="font-size: 0.82rem; color: #38bdf8; font-weight: 600;">🌿 Organic Alternative:</div>
            <p style="font-size: 0.8rem; color: var(--text-muted);">${escapeHtml(data.organic)}</p>
          </div>
        `;
      }
    }, 700);
  }

  // Run initial scan
  runScan("tomato");
}

// API Playground Simulator
function initApiSimulator() {
  const sendBtn = document.getElementById("simulateApiBtn");
  const outputEl = document.getElementById("apiJsonOutput");

  if (!sendBtn || !outputEl) return;

  sendBtn.addEventListener("click", () => {
    outputEl.textContent = "// Sending async POST /api/v1/advisory/ask request to FastAPI gateway...\n// Querying PostGIS database & Qdrant vector store...";
    
    setTimeout(() => {
      const simulatedJson = {
        status: "success",
        timestamp: new Date().toISOString(),
        inference_latency_ms: 184,
        geo_resolution: {
          country: "India",
          state: "Maharashtra",
          district: "Amravati",
          agro_climatic_zone: "Western Plateau and Hills"
        },
        crop_diagnosis: {
          disease_name: "Pink Bollworm Infestation",
          causal_organism: "Pectinophora gossypiella",
          confidence: 0.948,
          actionable_protocols: [
            {
              phase: "Immediate (0-48h)",
              method: "Biological",
              treatment: "Release Trichogramma bactrae cards @ 60,000/acre",
              dosage: "3 releases at weekly intervals"
            },
            {
              phase: "Preventative",
              method: "Mating Disruption",
              treatment: "Install PB-Rope pheromone dispensers",
              dosage: "200 units/acre"
            }
          ]
        },
        eligible_subsidies: [
          "State Cotton Pest Protection Scheme",
          "PM Fasal Bima Yojana Parametric Cover"
        ],
        source_verification: [
          "ICAR-Central Institute for Cotton Research (CICR) Bulletin 2024",
          "WHO Safe Pesticide Application Register"
        ]
      };

      outputEl.textContent = JSON.stringify(simulatedJson, null, 2);
    }, 500);
  });
}

// Helper: Escape HTML
function escapeHtml(text) {
  if (!text) return "";
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
