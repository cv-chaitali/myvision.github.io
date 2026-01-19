const conferenceData = [
  {
    "acronym": "ACL",
    "full_name": "Annual Meeting of the Association for Computational Linguistics (ACL)",
    "deadline": "2026-01-05 23:59:59",
    "abstract_deadline": null,
    "is_tba": false,
    "domain": "Natural Language Processing",
    "rating": "\ucd5c\uc6b0\uc218"
  },
  {
    "acronym": "ACL Findings",
    "full_name": "Findings of ACL",
    "deadline": "2026-01-05 23:59:59",
    "abstract_deadline": null,
    "is_tba": false,
    "domain": "Natural Language Processing",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "ICPR",
    "full_name": "International Conference on Pattern Recognition (ICPR)",
    "deadline": "2026-01-13 23:59:59",
    "abstract_deadline": null,
    "is_tba": false,
    "domain": "Other",
    "rating": ""
  },
  {
    "acronym": "CSCW",
    "full_name": "Conference on Computer Supported Cooperative Work (CSCW)",
    "deadline": "2026-01-16 23:59:59",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "HCI",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "IJCAI",
    "full_name": "International Joint Conference on Artificial Intelligence (IJCAI)",
    "deadline": "2026-01-19 23:59:59",
    "abstract_deadline": "2026-01-12 23:59:59",
    "is_tba": false,
    "domain": "Artificial Intelligence",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "SIGGRAPH",
    "full_name": "International Conference on Computer Graphics and Interactive Techniques (SIGGRAPH)",
    "deadline": "2026-01-22 22:00:00",
    "abstract_deadline": null,
    "is_tba": false,
    "domain": "HCI & Graphics",
    "rating": "\ucd5c\uc6b0\uc218"
  },
  {
    "acronym": "SIGIR",
    "full_name": "Annual International ACM SIGIR Conference on Research and Development in Information Retrieval (SIGIR)",
    "deadline": "2026-01-25 23:59:00",
    "abstract_deadline": "2026-01-18 23:59:00",
    "is_tba": true,
    "domain": "Data Mining & Web",
    "rating": "\ucd5c\uc6b0\uc218"
  },
  {
    "acronym": "ICML",
    "full_name": "International Conference on Machine Learning (ICML)",
    "deadline": "2026-01-28 23:59:59",
    "abstract_deadline": "2026-01-23 23:59:59",
    "is_tba": false,
    "domain": "Artificial Intelligence",
    "rating": "\ucd5c\uc6b0\uc218"
  },
  {
    "acronym": "RSS",
    "full_name": "Robotics: Science and Systems Conference (RSS)",
    "deadline": "2026-02-02 23:59:59",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Robotics",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "KDD",
    "full_name": "ACM SIGKDD Conference on Knowledge Discovery and Data Mining (KDD)",
    "deadline": "2026-02-08 23:59:59",
    "abstract_deadline": "2026-02-01 23:59:59",
    "is_tba": false,
    "domain": "Data Mining & Web",
    "rating": "\ucd5c\uc6b0\uc218"
  },
  {
    "acronym": "UAI",
    "full_name": "Conference on Uncertainty in Artificial Intelligence (UAI)",
    "deadline": "2026-02-09 23:59:59",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Artificial Intelligence",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "MICCAI",
    "full_name": "International Conference on Medical Image Computing and Computer-Assisted Intervention (MICCAI)",
    "deadline": "2026-02-26 23:59:59",
    "abstract_deadline": "2026-02-12 23:59:59",
    "is_tba": false,
    "domain": "Artificial Intelligence",
    "rating": "\ucd5c\uc6b0\uc218"
  },
  {
    "acronym": "IROS",
    "full_name": "IEEE/RJS International Conference on Intelligent RObots and Systems (IROS)",
    "deadline": "2026-03-01 23:59:59",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Robotics",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "ECCV",
    "full_name": "European Conference on Computer Vision (ECCV)",
    "deadline": "2026-03-06 23:59:59",
    "abstract_deadline": null,
    "is_tba": false,
    "domain": "Computer Vision",
    "rating": "\ucd5c\uc6b0\uc218"
  },
  {
    "acronym": "MM",
    "full_name": "ACM International Conference on Multimedia (MM)",
    "deadline": "2026-04-08 23:59:59",
    "abstract_deadline": "2026-04-12 23:59:59",
    "is_tba": true,
    "domain": "Computer Vision",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "ECAI",
    "full_name": "European Conference on Artificial Intelligence (ECAI)",
    "deadline": "2026-04-25 23:59:59",
    "abstract_deadline": "2026-04-19 23:59:59",
    "is_tba": true,
    "domain": "Artificial Intelligence",
    "rating": ""
  },
  {
    "acronym": "KR",
    "full_name": "International Conference on Principles of Knowledge Representation and Reasoning (KR)",
    "deadline": "2026-05-01 23:59:59",
    "abstract_deadline": "2026-04-24 23:59:59",
    "is_tba": true,
    "domain": "Artificial Intelligence",
    "rating": ""
  },
  {
    "acronym": "BMVC",
    "full_name": "British Machine Vision Conference (BMVC)",
    "deadline": "2026-05-10 23:59:59",
    "abstract_deadline": "2026-04-26 23:59:59",
    "is_tba": true,
    "domain": "Artificial Intelligence",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "CIKM",
    "full_name": "International Conference on Information and Knowledge Management (CIKM)",
    "deadline": "2026-05-20 23:59:59",
    "abstract_deadline": "2026-05-13 23:59:59",
    "is_tba": true,
    "domain": "Data Mining & Web",
    "rating": "\ucd5c\uc6b0\uc218"
  },
  {
    "acronym": "CoRL",
    "full_name": "Conference on Robot Learning (CoRL)",
    "deadline": "2026-06-06 23:59:00",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Robotics",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "EMNLP",
    "full_name": "Conference on Empirical Methods in Natural Language Processing (EMNLP)",
    "deadline": "2026-06-15 23:59:00",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Natural Language Processing",
    "rating": "\ucd5c\uc6b0\uc218"
  },
  {
    "acronym": "EMNLP Findings",
    "full_name": "Conference on Empirical Methods in Natural Language Processing (EMNLP)",
    "deadline": "2026-06-15 23:59:00",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Natural Language Processing",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "AAAI",
    "full_name": "AAAI Conference on Artificial Intelligence (AAAI)",
    "deadline": "2026-08-01 23:59:59",
    "abstract_deadline": "2026-07-25 23:59:59",
    "is_tba": true,
    "domain": "Artificial Intelligence",
    "rating": "\ucd5c\uc6b0\uc218"
  },
  {
    "acronym": "WSDM",
    "full_name": "Web Search and Data Mining (WSDM)",
    "deadline": "2026-08-14 23:59:00",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Data Mining & Web",
    "rating": "\ucd5c\uc6b0\uc218"
  },
  {
    "acronym": "ICASSP",
    "full_name": "IEEE International Conference on Acoustics, Speech, and Signal Processing (ICASSP)",
    "deadline": "2026-09-09 23:59:59",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Signal Processing",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "WACV",
    "full_name": "IEEE/CVF Winter Conference on Applications of Computer Vision (WACV)",
    "deadline": "2026-09-09 23:59:59",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Artificial Intelligence",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "CHI",
    "full_name": "ACM Conference on Human Factors in Computing Systems (CHI)",
    "deadline": "2026-09-12 23:59:59",
    "abstract_deadline": "2026-09-05 23:59:59",
    "is_tba": true,
    "domain": "HCI",
    "rating": "\ucd5c\uc6b0\uc218"
  },
  {
    "acronym": "ICRA",
    "full_name": "IEEE International Conference on Robotics and Automation (ICRA)",
    "deadline": "2026-09-15 23:59:59",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Robotics",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "COLING",
    "full_name": "International Conference on Computational Linguistics (COLING)",
    "deadline": "2026-09-16 23:59:59",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Natural Language Processing",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "ICLR",
    "full_name": "International Conference on Learning Representations (ICLR)",
    "deadline": "2026-09-24 23:59:59",
    "abstract_deadline": "2026-09-19 23:59:59",
    "is_tba": true,
    "domain": "Artificial Intelligence",
    "rating": "\ucd5c\uc6b0\uc218"
  },
  {
    "acronym": "IUI",
    "full_name": "International Conference on Intelligent User Interfaces (IUI)",
    "deadline": "2026-10-09 23:59:59",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "HCI",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "AISTATS",
    "full_name": "International Conference on Artificial Intelligence and Statistics (AISTATS)",
    "deadline": "2026-10-10 23:59:59",
    "abstract_deadline": "2026-10-03 23:59:59",
    "is_tba": true,
    "domain": "Artificial Intelligence",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "EACL",
    "full_name": "Conference of the European Chapter of the Association for Computational Linguistics (EACL)",
    "deadline": "2026-10-15 23:59:59",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Natural Language Processing",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "NAACL/HLT",
    "full_name": "North American Chapter of the Association for Computational Linguistics (NAACL)",
    "deadline": "2026-10-15 23:59:59",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Natural Language Processing",
    "rating": "\ucd5c\uc6b0\uc218"
  },
  {
    "acronym": "AAMAS",
    "full_name": "International Conference on Autonomous Agents and Multiagent Systems (AAMAS)",
    "deadline": "2026-10-16 23:59:59",
    "abstract_deadline": "2026-10-09 23:59:59",
    "is_tba": true,
    "domain": "Artificial Intelligence",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "CVPR",
    "full_name": "Computer Vision and Pattern Recognition (CVPR)",
    "deadline": "2026-11-13 23:59:59",
    "abstract_deadline": "2026-11-06 23:59:59",
    "is_tba": true,
    "domain": "Computer Vision",
    "rating": "\ucd5c\uc6b0\uc218"
  },
  {
    "acronym": "ICAPS",
    "full_name": "International Conference on Automated Planning and Scheduling (ICAPS)",
    "deadline": "2026-12-13 23:59:59",
    "abstract_deadline": "2026-12-07 23:59:59",
    "is_tba": true,
    "domain": "Artificial Intelligence",
    "rating": ""
  },
  {
    "acronym": "ACCV",
    "full_name": "Asian Conference on Computer Vision (ACCV)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Computer Vision",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "ACNS",
    "full_name": "International Conference on Applied Cryptography and Network Security (ACNS)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Security & Privacy",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "ACSAC",
    "full_name": "Annual Computer Security Applications Conference (ACSAC)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Security & Privacy",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "AIED",
    "full_name": "International Conference on Artificial Intelligence in Education (AIED)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Artificial Intelligence",
    "rating": ""
  },
  {
    "acronym": "ANCS",
    "full_name": "Symposium on Architectures for Networking and Communications Systems (ANCS)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Systems & Architecture",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "ASE",
    "full_name": "International Conference on Automated Software Engineering (ASE)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Software Engineering",
    "rating": "\ucd5c\uc6b0\uc218"
  },
  {
    "acronym": "ASIACCS",
    "full_name": "ACM Asia Conference on Computer and Communications Security (AsiaCCS)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Security & Privacy",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "ASIACRYPT",
    "full_name": "International Conference on the Theory and Application of Cryptology and Information Security (ASIACRYPT)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Security & Privacy",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "ASONAM",
    "full_name": "International Conference on Advances in Social Networks Analysis and Mining (ASONAM)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Data Mining & Web",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "ASPLOS",
    "full_name": "International Conference on Architectural Support for Programming Languages and Operating Systems (ASPLOS)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Systems & Architecture",
    "rating": "\ucd5c\uc6b0\uc218"
  },
  {
    "acronym": "ASRU",
    "full_name": "Automatic Speech Recognition &#38; Understanding (ASRU)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Other",
    "rating": ""
  },
  {
    "acronym": "AVSS",
    "full_name": "IEEE International Conference on Advanced Video and Signal Based Surveillance (AVSS)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Other",
    "rating": ""
  },
  {
    "acronym": "BCB",
    "full_name": "ACM International Conference on Bioinformatics, Computational Biology and Biomedicine (BCB)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Bioinformatics",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "BIBM",
    "full_name": "IEEE International Conference on Bioinformatics and Biomedicine (BIBM)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Bioinformatics",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "BIGDATA",
    "full_name": "IEEE International Conference on Big Data (BigData)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Data Mining & Web",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "Blockchain",
    "full_name": "IEEE International Conference on Blockchain (Blockchain)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Artificial Intelligence",
    "rating": ""
  },
  {
    "acronym": "CADE",
    "full_name": "Conference on Automated Deduction (CADE)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Other",
    "rating": ""
  },
  {
    "acronym": "CASES",
    "full_name": "International Conference on Compilers, Architecture, and Synthesis for Embedded Systems (CASES)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Systems & Architecture",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "CAV",
    "full_name": "International Conference on Computer Aided Verification (CAV)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Software Engineering",
    "rating": "\ucd5c\uc6b0\uc218"
  },
  {
    "acronym": "CC",
    "full_name": "International Conference on Compiler Construction (CC)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Other",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "CCC",
    "full_name": "Computational Complexity Conference (CCC)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Other",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "CCGRID",
    "full_name": "IEEE/ACM International Symposium on Cluster, Cloud and Internet Computing (CCGRID)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Other",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "CCS",
    "full_name": "Annual ACM Conference on Computer and Communications Security (CCS)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Security & Privacy",
    "rating": "\ucd5c\uc6b0\uc218"
  },
  {
    "acronym": "CGO",
    "full_name": "IEEE/ACM International Symposium on Code Generation and Optimization (CGO)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Other",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "CHES",
    "full_name": "Conference on Cryptographic Hardware and Embedded Systems (CHES)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Systems & Architecture",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "CIDR",
    "full_name": "Conference on Innovative Data Systems Research (CIDR)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Systems & Architecture",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "CLOUD",
    "full_name": "IEEE International Conference on Cloud Computing (CLOUD)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Other",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "CLUSTER",
    "full_name": "IEEE International Conference on Cluster Computing (CLUSTER)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Other",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "CODASPY",
    "full_name": "Conference on Data and Application Security and Privacy (CODASPY)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Security & Privacy",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "CODES+ISSS",
    "full_name": "International Conference on Hardware/Software Codesign and System Synthesis (CODES+ISSS)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Systems & Architecture",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "CogSci",
    "full_name": "Annual Meeting of the Cognitive Science Society (CogSci)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Other",
    "rating": ""
  },
  {
    "acronym": "COLT",
    "full_name": "Annual Conference Computational Learning Theory (COLT)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Artificial Intelligence",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "CONCUR",
    "full_name": "International Conference on Concurrency Theory (CONCUR)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Other",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "CONEXT",
    "full_name": "Conference on Emerging Network Experiment and Technology (CoNEXT)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Other",
    "rating": "\ucd5c\uc6b0\uc218"
  },
  {
    "acronym": "CoNLL",
    "full_name": "Conference on Computational Natural Language Learning (CoNLL)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Natural Language Processing",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "CPM",
    "full_name": "Annual Symposium on Combinatorial Pattern Matching (CPM)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Other",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "CRYPTO",
    "full_name": "Annual International Cryptology Conference (CRYPTO)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Other",
    "rating": "\ucd5c\uc6b0\uc218"
  },
  {
    "acronym": "CSEET",
    "full_name": "Conference on Software Engineering Education and Training (CSEE&#38;T)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Software Engineering",
    "rating": ""
  },
  {
    "acronym": "CSF",
    "full_name": "IEEE Computer Security Foundations Symposium (CSF)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Security & Privacy",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "DAC",
    "full_name": "Design Automation Conference (DAC)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Other",
    "rating": "\ucd5c\uc6b0\uc218"
  },
  {
    "acronym": "DASFAA",
    "full_name": "International Conference on Database Systems for Advanced Applications (DASFAA)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Systems & Architecture",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "DATE",
    "full_name": "Design, Automation, and Test in Europe (DATE)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Other",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "DISC",
    "full_name": "International Symposium on Distributed Computing (DISC)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Systems & Architecture",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "DLT",
    "full_name": "International Conference on Developments in Language Theory (DLT)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Other",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "DSN",
    "full_name": "Dependable Systems and Networks (DSN)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Systems & Architecture",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "ECCB",
    "full_name": "European Conference on Computational Biology (ECCB)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Bioinformatics",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "ECOOP",
    "full_name": "European Conference on Object-Oriented Programming (ECOOP)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Other",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "ECRTS",
    "full_name": "Euromicro Conference on Real-Time Systems (ECRTS)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Systems & Architecture",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "EDBT",
    "full_name": "International Conference on Extending Database Technology (EDBT)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Data Mining & Web",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "EMSOFT",
    "full_name": "International Conference on Embedded Software (EMSOFT)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Software Engineering",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "ESA",
    "full_name": "European Symposium on Algorithms (ESA)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Other",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "ESOP",
    "full_name": "European Symposium on Programming (ESOP)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Other",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "ESORICS",
    "full_name": "European Symposium on Research in Computer Security (ESORICS)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Security & Privacy",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "EURO-PAR",
    "full_name": "European Conference on Parallel Processing (Euro-Par)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Systems & Architecture",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "EUROCRYPT",
    "full_name": "International Conference on the Theory and Application of Cryptographic Techniques (EUROCRYPT)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Other",
    "rating": "\ucd5c\uc6b0\uc218"
  },
  {
    "acronym": "Eurographics",
    "full_name": "Annual Conference of the European Association for Computer Graphics (Eurographics)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "HCI & Graphics",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "EuroS&P",
    "full_name": "European Symposium on Security and Privacy (EuroS&#38;P)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Security & Privacy",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "EuroSys",
    "full_name": "European Conference on Computer Systems (EuroSys)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Systems & Architecture",
    "rating": "\ucd5c\uc6b0\uc218"
  },
  {
    "acronym": "EuroVis",
    "full_name": "Eurographics Conference on Visualization (EuroVis)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "HCI & Graphics",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "FASE",
    "full_name": "Fundamental Approaches to Software Engineering (FASE)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Software Engineering",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "FC",
    "full_name": "Financial Cryptography and Data Security (FC)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Security & Privacy",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "FCCM",
    "full_name": "IEEE Symposium on Field-Programmable Custom Computing Machines (FCCM)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Other",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "FM",
    "full_name": "International Symposium on Formal Methods (FM)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Other",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "FMCAD",
    "full_name": "Formal Methods in Computer-Aided Design (FMCAD)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Other",
    "rating": ""
  },
  {
    "acronym": "FOCS",
    "full_name": "IEEE Annual Symposium on Foundations of Computer Science (FOCS)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Other",
    "rating": "\ucd5c\uc6b0\uc218"
  },
  {
    "acronym": "FPGA",
    "full_name": "Symposium on Field Programmable Gate Arrays (FPGA)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Other",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "FPL",
    "full_name": "International Conference on Field-Programmable Logic and Applications (FPL)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Other",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "FSE",
    "full_name": "Fast Software Encryption Workshop (FSE)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Software Engineering",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "FSE/ESEC",
    "full_name": "ACM SIGSOFT Conference on the Foundations of Software Engineering (FSE)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Software Engineering",
    "rating": "\ucd5c\uc6b0\uc218"
  },
  {
    "acronym": "GECCO",
    "full_name": "Annual Conference on Genetic and Evolutionary Computation (GECCO)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Other",
    "rating": ""
  },
  {
    "acronym": "HiPC",
    "full_name": "International Conference on High Performance Computing, Data, and Analytics (HiPC)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Data Mining & Web",
    "rating": ""
  },
  {
    "acronym": "HiPEAC",
    "full_name": "International Conference on High Performance Embedded Architectures and Compilers (HiPEAC)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Systems & Architecture",
    "rating": ""
  },
  {
    "acronym": "HPCA",
    "full_name": "International Symposium on High-Performance Computer Architecture (HPCA)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Systems & Architecture",
    "rating": "\ucd5c\uc6b0\uc218"
  },
  {
    "acronym": "HPDC",
    "full_name": "International Symposium on High-Performance Parallel Distributed Computing (HPDC)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Systems & Architecture",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "HSCC",
    "full_name": "International Conference on Hybrid Systems: Computation and Control (HSCC)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Systems & Architecture",
    "rating": ""
  },
  {
    "acronym": "I3D",
    "full_name": "ACM Symposium on Interactive 3D Graphics and Games (i3D)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "HCI & Graphics",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "ICALP",
    "full_name": "International Colloquium on Automata, Languages and Programming (ICALP)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Other",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "ICBC",
    "full_name": "IEEE International Conference on Blockchain and Cryptocurrency (ICBC)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Other",
    "rating": ""
  },
  {
    "acronym": "ICCAD",
    "full_name": "International Conference on Computer Aided Design (ICCAD)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Other",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "ICCD",
    "full_name": "International Conference on Computer Design (ICCD)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Other",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "ICCPS",
    "full_name": "International Conference on Cyber-Physical Systems (ICCPS)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Systems & Architecture",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "ICCV",
    "full_name": "IEEE International Conference on Computer Vision (ICCV)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Computer Vision",
    "rating": "\ucd5c\uc6b0\uc218"
  },
  {
    "acronym": "ICDCS",
    "full_name": "IEEE International Conference on Distributed Computing Systems (ICDCS)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Systems & Architecture",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "ICDE",
    "full_name": "IEEE International Conference on Data Engineering (ICDE)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Data Mining & Web",
    "rating": "\ucd5c\uc6b0\uc218"
  },
  {
    "acronym": "ICDM",
    "full_name": "IEEE International Conference on Data Mining (ICDM)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Data Mining & Web",
    "rating": "\ucd5c\uc6b0\uc218"
  },
  {
    "acronym": "ICFP",
    "full_name": "ACM SIGPLAN International Conference on Functional Programming (ICFP)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Other",
    "rating": "\ucd5c\uc6b0\uc218"
  },
  {
    "acronym": "ICLP",
    "full_name": "International Conference on Logic Programming (ICLP)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Other",
    "rating": ""
  },
  {
    "acronym": "ICMI",
    "full_name": "International Conference on Multimodal Interaction (ICMI)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "HCI & Graphics",
    "rating": ""
  },
  {
    "acronym": "ICMR",
    "full_name": "International Conference on Multimedia Retrieval (ICMR)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Data Mining & Web",
    "rating": ""
  },
  {
    "acronym": "ICN",
    "full_name": "Information-Centric Networking (ICN)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Other",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "ICNP",
    "full_name": "IEEE International Conference on Network Protocols (ICNP)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Other",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "ICPP",
    "full_name": "International Conference on Parallel Processing (ICPP)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Systems & Architecture",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "ICS",
    "full_name": "ACM International Conference on Supercomputing (ICS)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Other",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "ICSE",
    "full_name": "International Conference on Software Engineering (ICSE)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Software Engineering",
    "rating": "\ucd5c\uc6b0\uc218"
  },
  {
    "acronym": "ICSME (ICSM)",
    "full_name": "IEEE International Conference on Software Maintenance and Evolution (ICSME)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Software Engineering",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "ICSOC",
    "full_name": "International Conference on Service Oriented Computing (ICSOC)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Other",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "ICST",
    "full_name": "International Conference on Software Testing, Verification, and Validation (ICST)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Software Engineering",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "ICWS",
    "full_name": "IEEE International Conference on Web Services (IEEE ICWS)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Data Mining & Web",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "ICWSM",
    "full_name": "International Conference on Web and Social Media (ICWSM)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Data Mining & Web",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "IISWC",
    "full_name": "IEEE International Symposium on Workload Characterization (IISWC)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Other",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "IJCAR",
    "full_name": "International Joint Conference on Automated Reasoning (IJCAR)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Other",
    "rating": ""
  },
  {
    "acronym": "IJCNLP",
    "full_name": "International Joint Conference on Natural Language Processing (IJCNLP)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Natural Language Processing",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "IM",
    "full_name": "IFIP/IEEE Symposium on Integrated Network Management (IM)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Other",
    "rating": ""
  },
  {
    "acronym": "IMC",
    "full_name": "ACM/SIGCOMM Internet Measurement Conference (IMC)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Other",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "INFOCOM",
    "full_name": "IEEE Conference on Computer Communications (INFOCOM)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Other",
    "rating": "\ucd5c\uc6b0\uc218"
  },
  {
    "acronym": "InfoVis",
    "full_name": "IEEE Information Visualization Conference (InfoVis)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Other",
    "rating": ""
  },
  {
    "acronym": "InterSpeech",
    "full_name": "Conference of the International Speech Communication Association (INTERSPEECH)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Other",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "IPDPS",
    "full_name": "IEEE International Parallel and Distributed Processing Symposium (IPDPS)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Systems & Architecture",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "IPMI",
    "full_name": "Information Processing in Medical Imaging (IPMI)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Bioinformatics",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "IPSN",
    "full_name": "International Symposium on Information Processing in Sensor Networks (IPSN)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Other",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "ISAAC",
    "full_name": "International Symposium on Algorithms and Computation (ISAAC)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Other",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "ISBI",
    "full_name": "IEEE International Symposium on Biomedical Imaging (ISBI)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Bioinformatics",
    "rating": ""
  },
  {
    "acronym": "ISCA",
    "full_name": "International Symposium on Computer Architecture (ISCA)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Systems & Architecture",
    "rating": "\ucd5c\uc6b0\uc218"
  },
  {
    "acronym": "ISIT",
    "full_name": "International Symposium on Information Theory (ISIT)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Other",
    "rating": ""
  },
  {
    "acronym": "ISLPED",
    "full_name": "International Symposium on Low Power Electronics and Design (ISLPED)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Other",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "ISMAR",
    "full_name": "International Symposium on Mixed and Augmented Reality (ISMAR)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Other",
    "rating": "\ucd5c\uc6b0\uc218"
  },
  {
    "acronym": "ISMB",
    "full_name": "Intelligent Systems in Molecular Biology (ISMB)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Systems & Architecture",
    "rating": "\ucd5c\uc6b0\uc218"
  },
  {
    "acronym": "ISPASS",
    "full_name": "IEEE International Symposium on Performance Analysis of Systems and Software (ISPASS)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Systems & Architecture",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "ISSRE",
    "full_name": "IEEE International Symposium on Software Reliability Engineering (ISSRE)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Software Engineering",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "ISSTA",
    "full_name": "International Symposium on Software Testing and Analysis (ISSTA)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Software Engineering",
    "rating": "\ucd5c\uc6b0\uc218"
  },
  {
    "acronym": "ISWC",
    "full_name": "International Semantic Web Conference (ISWC)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Data Mining & Web",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "ITS",
    "full_name": "International Conference on Augmented Intelligence and Intelligent Tutoring Systems (ITS)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Systems & Architecture",
    "rating": ""
  },
  {
    "acronym": "LCTES",
    "full_name": "ACM SIGPLAN/SIGBED International Conference on Languages, Compilers, and Tools for Embedded Systems (LCTES)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Systems & Architecture",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "LICS",
    "full_name": "ACM/IEEE Symposium on Logic in Computer Science (LICS)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Other",
    "rating": "\ucd5c\uc6b0\uc218"
  },
  {
    "acronym": "LREC",
    "full_name": "International Conference on Language Resources and Evaluation (LREC)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Other",
    "rating": ""
  },
  {
    "acronym": "MASCOTS",
    "full_name": "IEEE/ACM International Symposium on Modeling, Analysis, and Simulation On Computer and Telecommunication Systems (MASCOTS)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Systems & Architecture",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "MASS",
    "full_name": "IEEE International Conference on Mobile Adhoc and Sensor Systems (MASS)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Systems & Architecture",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "MEMSYS",
    "full_name": "International Symposium on Memory Systems (MEMSYS)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Systems & Architecture",
    "rating": ""
  },
  {
    "acronym": "MFCS",
    "full_name": "International Symposium on Mathematical Foundations of Computer Science (MFCS)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Other",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "MICRO",
    "full_name": "Annual IEEE/ACM International Symposium on Microarchitecture (MICRO)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Systems & Architecture",
    "rating": "\ucd5c\uc6b0\uc218"
  },
  {
    "acronym": "MIDDLEWARE",
    "full_name": "International Middleware Conference (Middleware)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Other",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "MLSys",
    "full_name": "Conference on Machine Learning and Systems (MLSys)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Systems & Architecture",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "MMsys",
    "full_name": "ACM SIGMM Conference on Multimedia Systems (MMSys)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Systems & Architecture",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "MobiCom",
    "full_name": "Annual International Conference on Mobile Computing and Networking (MobiCom)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Systems & Architecture",
    "rating": "\ucd5c\uc6b0\uc218"
  },
  {
    "acronym": "MobiHoc",
    "full_name": "International Symposium on Theory, Algorithmic Foundations, and Protocol Design for Mobile Networks and Mobile Computing (MobiHoc)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Systems & Architecture",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "MobileHCI",
    "full_name": "International Conference on Human-Computer Interaction with Mobile Devices and Services (MobileHCI)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Systems & Architecture",
    "rating": ""
  },
  {
    "acronym": "MobiSys",
    "full_name": "ACM SIGMOBILE International Conference on Mobile Systems, Applications, and Services (MobiSys)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Systems & Architecture",
    "rating": "\ucd5c\uc6b0\uc218"
  },
  {
    "acronym": "MODELS",
    "full_name": "ACM/IEEE International Conference on Model Driven Engineering Languages and Systems (MoDELS)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Systems & Architecture",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "MSR",
    "full_name": "IEEE/ACM International Conference on Mining Software Repositories (MSR)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Data Mining & Web",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "MSST",
    "full_name": "IEEE Conference on Mass Storage Systems and Technologies (MSST)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Systems & Architecture",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "NAACL Findings",
    "full_name": "North American Chapter of the Association for Computational Linguistics (NAACL)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Natural Language Processing",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "NDSS",
    "full_name": "Network and Distributed System Security Symposium (NDSS)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Security & Privacy",
    "rating": "\ucd5c\uc6b0\uc218"
  },
  {
    "acronym": "NeurIPS/NIPS",
    "full_name": "Conference on Neural Information Processing Systems (NeurIPS)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Systems & Architecture",
    "rating": "\ucd5c\uc6b0\uc218"
  },
  {
    "acronym": "NOMS",
    "full_name": "IEEE/IFIP Network Operations and Management Symposium (NOMS)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Other",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "NOSSDAV",
    "full_name": "International Workshop on Network and Operating System Support for Digital Audio and Video (NOSSDAV)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Systems & Architecture",
    "rating": ""
  },
  {
    "acronym": "OOPSLA",
    "full_name": "ACM SIGPLAN International Conference on Object-Oriented Programming Systems, Languages, and Applications (OOPSLA)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Systems & Architecture",
    "rating": "\ucd5c\uc6b0\uc218"
  },
  {
    "acronym": "Pacific Graphics",
    "full_name": "Pacific Conference on Computer Graphics and Applications (PG)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "HCI & Graphics",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "PACT",
    "full_name": "International Conference on Parallel Architectures and Compilation Techniques (PACT)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Systems & Architecture",
    "rating": "\ucd5c\uc6b0\uc218"
  },
  {
    "acronym": "PAKDD",
    "full_name": "Pacific-Asia Conference on Knowledge Discovery and Data Mining (PAKDD)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Data Mining & Web",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "PAM",
    "full_name": "International Conference on Passive and Active Measurement (PAM)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Other",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "PERCOM",
    "full_name": "Annual IEEE International Conference on Pervasive Computing and Communications (PerCom)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Other",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "PERFORMANCE",
    "full_name": "International Symposium on Computer Modeling, Measurement and Evaluation (Performance)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Other",
    "rating": ""
  },
  {
    "acronym": "PETS",
    "full_name": "Proceedings on Privacy Enhancing Technologies (PoPETs)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Security & Privacy",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "PKC",
    "full_name": "International Conference on Theory and Practice of Public Key Cryptography (PKC)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Security & Privacy",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "PKDD",
    "full_name": "European Conference on Machine Learning and Knowledge Discovery in Databases (PKDD)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Data Mining & Web",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "PLDI",
    "full_name": "ACM-SIGPLAN Symposium on Programming Language Design and Implementation (PLDI)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Other",
    "rating": "\ucd5c\uc6b0\uc218"
  },
  {
    "acronym": "PODC",
    "full_name": "ACM Symposium on Principles of Distributed Computing (PODC)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Systems & Architecture",
    "rating": "\ucd5c\uc6b0\uc218"
  },
  {
    "acronym": "PODS",
    "full_name": "ACM SIGACT-SIGMOD-SIGART Symposium on Principles of Database Systems (PODS)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Systems & Architecture",
    "rating": "\ucd5c\uc6b0\uc218"
  },
  {
    "acronym": "POPL",
    "full_name": "ACM-SIGACT Symposium on Principles of Programming Languages (POPL)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Other",
    "rating": "\ucd5c\uc6b0\uc218"
  },
  {
    "acronym": "PPoPP",
    "full_name": "ACM SIGPLAN Symposium on Principles &#38; Practice of Parallel Programming (PPoPP)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Systems & Architecture",
    "rating": "\ucd5c\uc6b0\uc218"
  },
  {
    "acronym": "PSB",
    "full_name": "Pacific Symposium on Biocomputing (PSB)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Other",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "RAID",
    "full_name": "International Symposium on Recent Advances in Intrusion Detection (RAID)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Artificial Intelligence",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "RE",
    "full_name": "IEEE International Requirements Engineering Conference (RE)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Other",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "RECOMB",
    "full_name": "Annual International Conference on Research in Computational Molecular Biology (RECOMB)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Bioinformatics",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "RecSys",
    "full_name": "ACM Conference on Recommender Systems (RecSys)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Systems & Architecture",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "RTAS",
    "full_name": "IEEE Real Time Technology and Applications Symposium (RTAS)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Other",
    "rating": "\ucd5c\uc6b0\uc218"
  },
  {
    "acronym": "RTSS",
    "full_name": "IEEE Real-Time Systems Symposium (RTSS)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Systems & Architecture",
    "rating": "\ucd5c\uc6b0\uc218"
  },
  {
    "acronym": "S&P",
    "full_name": "IEEE Symposium on Security and Privacy (SP)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Security & Privacy",
    "rating": "\ucd5c\uc6b0\uc218"
  },
  {
    "acronym": "SAC",
    "full_name": "ACM Symposium on Applied Computing (SAC)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Other",
    "rating": ""
  },
  {
    "acronym": "SANER",
    "full_name": "IEEE International Conference on Software Analysis, Evolution, and Reengineering (SANER)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Software Engineering",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "SAS",
    "full_name": "International Static Analysis Symposium (SAS)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Other",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "SC",
    "full_name": "International Conference for High Performance Computing, Networking, Storage and Analysis (SC)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Other",
    "rating": "\ucd5c\uc6b0\uc218"
  },
  {
    "acronym": "SCA",
    "full_name": "Symposium on Computer Animation (SCA)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Other",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "SDM",
    "full_name": "SIAM International Conference on Data Mining (SDM)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Data Mining & Web",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "SEC (IFIP-SEC)",
    "full_name": "IFIP International Information Security Conference (SEC)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Security & Privacy",
    "rating": ""
  },
  {
    "acronym": "SECON",
    "full_name": "Annual IEEE International Conference on Sensing, Communication, and Networking (SECON)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Other",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "SenSys",
    "full_name": "ACM International Conference on Embedded Networked Sensor Systems (SenSys)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Systems & Architecture",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "SGP",
    "full_name": "Eurographics Symposium on Geometry Processing (SGP)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "HCI & Graphics",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "SIGCOMM",
    "full_name": "ACM SIGCOMM Conference (SIGCOMM)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Other",
    "rating": "\ucd5c\uc6b0\uc218"
  },
  {
    "acronym": "SIGDIAL",
    "full_name": "SIGdial Meetings (SIGDIAL)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Other",
    "rating": ""
  },
  {
    "acronym": "SIGGRAPH ASIA",
    "full_name": "ACM SIGGRAPH Conference and Exhibition on Computer Graphics and Interactive Techniques in Asia (SIGGRAPH Asia)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "HCI & Graphics",
    "rating": "\ucd5c\uc6b0\uc218"
  },
  {
    "acronym": "SIGMETRICS",
    "full_name": "International Conference on Measurement and Modeling of Computer Systems (SIGMETRICS)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Systems & Architecture",
    "rating": "\ucd5c\uc6b0\uc218"
  },
  {
    "acronym": "SIGMOD",
    "full_name": "ACM SIGMOD Conference (SIGMOD)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Other",
    "rating": "\ucd5c\uc6b0\uc218"
  },
  {
    "acronym": "SLT",
    "full_name": "Spoken Language Technology Workshop (SLT)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Other",
    "rating": ""
  },
  {
    "acronym": "SOCC",
    "full_name": "ACM Symposium on Cloud Computing (SoCC)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Other",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "SOCG",
    "full_name": "International Symposium on Computational Geometry (SoCG)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Other",
    "rating": "\ucd5c\uc6b0\uc218"
  },
  {
    "acronym": "SODA",
    "full_name": "ACM-SIAM Symposium on Discrete Algorithms (SODA)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Other",
    "rating": "\ucd5c\uc6b0\uc218"
  },
  {
    "acronym": "SOSP",
    "full_name": "Symposium on Operating Systems Principles (SOSP)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Systems & Architecture",
    "rating": "\ucd5c\uc6b0\uc218"
  },
  {
    "acronym": "SOUPS",
    "full_name": "Symposium On Usable Privacy and Security (SOUPS)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Security & Privacy",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "SPAA",
    "full_name": "ACM Symposium on Parallelism in Algorithms and Architectures (SPAA)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Systems & Architecture",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "SRDS",
    "full_name": "IEEE International Symposium on Reliable Distributed Systems (SRDS)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Systems & Architecture",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "STACS",
    "full_name": "Symposium on Theoretical Aspects of Computer Science (STACS)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Other",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "STOC",
    "full_name": "Symposium on the Theory of Computing (STOC)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Other",
    "rating": "\ucd5c\uc6b0\uc218"
  },
  {
    "acronym": "SWAT",
    "full_name": "Scandinavian Workshop on Algorithm Theory (SWAT)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Other",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "SYSTOR",
    "full_name": "International Systems and Storage Conference (SYSTOR)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Systems & Architecture",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "TACAS",
    "full_name": "International Conference on Tools and Algorithms for Construction and Analysis of Systems (TACAS)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Systems & Architecture",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "TCC",
    "full_name": "Theory of Cryptography Conference (TCC)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Security & Privacy",
    "rating": ""
  },
  {
    "acronym": "UBICOMP",
    "full_name": "ACM International Joint Conference on Pervasive and Ubiquitous Computing (UbiComp)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Other",
    "rating": "\ucd5c\uc6b0\uc218"
  },
  {
    "acronym": "UIST",
    "full_name": "ACM Symposium on User Interface Software and Technology (UIST)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "HCI & Graphics",
    "rating": "\ucd5c\uc6b0\uc218"
  },
  {
    "acronym": "USENIX ATC",
    "full_name": "USENIX Annual Technical Conference (USENIX ATC)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Other",
    "rating": "\ucd5c\uc6b0\uc218"
  },
  {
    "acronym": "USENIX FAST",
    "full_name": "USENIX Conference on File and Storage Technologies (FAST)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Other",
    "rating": "\ucd5c\uc6b0\uc218"
  },
  {
    "acronym": "USENIX NSDI",
    "full_name": "Symposium on Networked Systems Design and Implementation (NSDI)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Systems & Architecture",
    "rating": "\ucd5c\uc6b0\uc218"
  },
  {
    "acronym": "USENIX OSDI",
    "full_name": "USENIX Symposium on Operating Systems Design and Implementation (OSDI)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Systems & Architecture",
    "rating": "\ucd5c\uc6b0\uc218"
  },
  {
    "acronym": "USENIX Security",
    "full_name": "USENIX Security Symposium",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Security & Privacy",
    "rating": "\ucd5c\uc6b0\uc218"
  },
  {
    "acronym": "VEE",
    "full_name": "International Conference on Virtual Execution Environments (VEE)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Other",
    "rating": ""
  },
  {
    "acronym": "VIS",
    "full_name": "IEEE Visualization Conference (VIS)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Other",
    "rating": "\ucd5c\uc6b0\uc218"
  },
  {
    "acronym": "VLDB / PVLDB",
    "full_name": "Very Large Data Bases Conference (VLDB)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Data Mining & Web",
    "rating": "\ucd5c\uc6b0\uc218"
  },
  {
    "acronym": "VMCAI",
    "full_name": "International Conference on Verification, Model Checking and Abstract Interpretation (VMCAI)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Artificial Intelligence",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "VR",
    "full_name": "IEEE Conference on Virtual Reality and 3D User Interfaces (VR)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "HCI & Graphics",
    "rating": "\ucd5c\uc6b0\uc218"
  },
  {
    "acronym": "VRST",
    "full_name": "ACM Symposium on Virtual Reality Software and Technology (VRST)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Software Engineering",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "WADS",
    "full_name": "nternational Symposium on Algorithms and Data Structures (WADS)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Data Mining & Web",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "WHC/HS",
    "full_name": "World Haptics Conference (WHC)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Other",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "WiOpt",
    "full_name": "International Symposium on Modeling and Optimization in Mobile, Ad-Hoc and Wireless Networks (WiOpt)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Systems & Architecture",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "WiSec",
    "full_name": "Conference on Security and Privacy in Wireless and Mobile Networks (WISEC)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Security & Privacy",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "WMT",
    "full_name": "Conference on Machine Translation (WMT)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Other",
    "rating": ""
  },
  {
    "acronym": "WoWMoM",
    "full_name": "IEEE International Symposium on a World of Wireless, Mobile and Multimedia Networks (WoWMoM)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Systems & Architecture",
    "rating": "\uc6b0\uc218"
  },
  {
    "acronym": "WWW",
    "full_name": "The Web Conference (WWW)",
    "deadline": "TBA",
    "abstract_deadline": null,
    "is_tba": true,
    "domain": "Data Mining & Web",
    "rating": "\ucd5c\uc6b0\uc218"
  }
];