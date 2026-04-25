# Graph Report - ~/.claude  (2026-04-16)

## Corpus Check
- Large corpus: 227 files · ~301,251 words. Semantic extraction will be expensive (many Claude tokens). Consider running on a subfolder, or use --no-semantic to run AST-only.

## Summary
- 210 nodes · 348 edges · 19 communities detected
- Extraction: 85% EXTRACTED · 15% INFERRED · 0% AMBIGUOUS · INFERRED: 51 edges (avg confidence: 0.66)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Plugin Development|Plugin Development]]
- [[_COMMUNITY_External Integrations|External Integrations]]
- [[_COMMUNITY_Skill Creation Framework|Skill Creation Framework]]
- [[_COMMUNITY_Configuration Management|Configuration Management]]
- [[_COMMUNITY_Hook System|Hook System]]
- [[_COMMUNITY_Reporting & Analytics|Reporting & Analytics]]
- [[_COMMUNITY_Agent SDK Tools|Agent SDK Tools]]
- [[_COMMUNITY_Marketplace Infrastructure|Marketplace Infrastructure]]
- [[_COMMUNITY_Documentation & References|Documentation & References]]
- [[_COMMUNITY_Communication Protocols|Communication Protocols]]
- [[_COMMUNITY_Security & Permissions|Security & Permissions]]
- [[_COMMUNITY_Task & Workflow Management|Task & Workflow Management]]
- [[_COMMUNITY_API & Service Clients|API & Service Clients]]
- [[_COMMUNITY_UI Components & Views|UI Components & Views]]
- [[_COMMUNITY_Testing & Validation|Testing & Validation]]
- [[_COMMUNITY_Build & Deployment|Build & Deployment]]
- [[_COMMUNITY_Error Handling & Logging|Error Handling & Logging]]
- [[_COMMUNITY_Performance Optimization|Performance Optimization]]
- [[_COMMUNITY_Utility Functions & Helpers|Utility Functions & Helpers]]

## God Nodes (most connected - your core abstractions)
1. `RuleEngine` - 19 edges
2. `Condition` - 13 edges
3. `handleInbound()` - 11 edges
4. `Rule` - 11 edges
5. `run_loop()` - 9 edges
6. `loadAccess()` - 8 edges
7. `gate()` - 8 edges
8. `load_rules()` - 7 edges
9. `main()` - 7 edges
10. `ReviewHandler` - 7 edges

## Surprising Connections (you probably didn't know these)
- `fetchTextChannel()` --calls--> `fetch()`  [INFERRED]
  C:\Users\Archit\.claude\plugins\marketplaces\claude-plugins-official\external_plugins\discord\server.ts → C:\Users\Archit\.claude\plugins\marketplaces\claude-plugins-official\external_plugins\fakechat\server.ts
- `run_single_query()` --calls--> `poll()`  [INFERRED]
  C:\Users\Archit\.claude\plugins\marketplaces\claude-plugins-official\plugins\skill-creator\skills\skill-creator\scripts\run_eval.py → C:\Users\Archit\.claude\plugins\marketplaces\claude-plugins-official\external_plugins\imessage\server.ts
- `Main entry point for PostToolUse hook.` --uses--> `RuleEngine`  [INFERRED]
  C:\Users\Archit\.claude\plugins\marketplaces\claude-plugins-official\plugins\hookify\hooks\posttooluse.py → C:\Users\Archit\.claude\plugins\marketplaces\claude-plugins-official\plugins\hookify\core\rule_engine.py
- `Main entry point for PreToolUse hook.` --uses--> `RuleEngine`  [INFERRED]
  C:\Users\Archit\.claude\plugins\marketplaces\claude-plugins-official\plugins\hookify\hooks\pretooluse.py → C:\Users\Archit\.claude\plugins\marketplaces\claude-plugins-official\plugins\hookify\core\rule_engine.py
- `Main entry point for Stop hook.` --uses--> `RuleEngine`  [INFERRED]
  C:\Users\Archit\.claude\plugins\marketplaces\claude-plugins-official\plugins\hookify\hooks\stop.py → C:\Users\Archit\.claude\plugins\marketplaces\claude-plugins-official\plugins\hookify\core\rule_engine.py

## Hyperedges (group relationships)
- **Plugin Development Framework** — hookify_core, session_report, skill_creator, claude_md_management [EXTRACTED 1.00]

## Communities

### Community 0 - "Plugin Development"
Cohesion: 0.1
Nodes (29): Condition, extract_frontmatter(), from_dict(), load_rule_file(), load_rules(), A single condition for matching., Load all hookify rules from .claude directory.      Args:         event: Optiona, Load a single rule file.      Returns:         Rule object or None if file is in (+21 more)

### Community 1 - "External Integrations"
Cohesion: 0.14
Nodes (29): allowedChatGuids(), appleDate(), assertAllowedChat(), assertSendable(), checkApprovals(), chunk(), consumeEcho(), conversationHeader() (+21 more)

### Community 2 - "Skill Creation Framework"
Cohesion: 0.15
Nodes (21): addUsage(), buildByDay(), bumpSkill(), classifyFile(), fmt(), handleUser(), hrs(), inferAgentTypeFromFilename() (+13 more)

### Community 3 - "Configuration Management"
Cohesion: 0.11
Nodes (21): generate_html(), main(), Generate HTML report from loop output data. If auto_refresh is True, adds a meta, improve_description(), main(), Call Claude to improve the description based on eval results., find_project_root(), main() (+13 more)

### Community 4 - "Hook System"
Cohesion: 0.13
Nodes (18): BaseHTTPRequestHandler, build_run(), embed_file(), find_runs(), _find_runs_recursive(), generate_html(), get_mime_type(), _kill_port() (+10 more)

### Community 5 - "Reporting & Analytics"
Cohesion: 0.2
Nodes (15): check_patterns(), cleanup_old_state_files(), debug_log(), extract_content_from_input(), get_state_file(), load_state(), main(), Get session-specific state file path. (+7 more)

### Community 6 - "Agent SDK Tools"
Cohesion: 0.24
Nodes (11): aggregate_results(), calculate_stats(), generate_benchmark(), generate_markdown(), load_run_results(), main(), Aggregate run results into summary statistics.      Returns run_summary with sta, Generate complete benchmark.json from run results. (+3 more)

### Community 7 - "Marketplace Infrastructure"
Cohesion: 0.28
Nodes (7): main(), package_skill(), Check if a path should be excluded from packaging., Package a skill folder into a .skill file.      Args:         skill_path: Path t, should_exclude(), Basic validation of a skill, validate_skill()

### Community 8 - "Documentation & References"
Cohesion: 0.33
Nodes (3): downloadAttachment(), fetch(), mime()

### Community 9 - "Communication Protocols"
Cohesion: 1.0
Nodes (2): Hookify Core, Session Report

### Community 10 - "Security & Permissions"
Cohesion: 1.0
Nodes (2): Claude MD Management, Skill Creator

### Community 11 - "Task & Workflow Management"
Cohesion: 1.0
Nodes (2): External Messaging Plugins, Skill Development Framework

### Community 12 - "API & Service Clients"
Cohesion: 1.0
Nodes (1): Create Condition from dict.

### Community 13 - "UI Components & Views"
Cohesion: 1.0
Nodes (1): Create Rule from frontmatter dict and message body.

### Community 14 - "Testing & Validation"
Cohesion: 1.0
Nodes (0): 

### Community 15 - "Build & Deployment"
Cohesion: 1.0
Nodes (0): 

### Community 16 - "Error Handling & Logging"
Cohesion: 1.0
Nodes (0): 

### Community 17 - "Performance Optimization"
Cohesion: 1.0
Nodes (0): 

### Community 18 - "Utility Functions & Helpers"
Cohesion: 1.0
Nodes (0): 

## Knowledge Gaps
- **37 isolated node(s):** `A single condition for matching.`, `Create Condition from dict.`, `Create Rule from frontmatter dict and message body.`, `Extract YAML frontmatter and message body from markdown.      Returns (frontmatt`, `Load all hookify rules from .claude directory.      Args:         event: Optiona` (+32 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Communication Protocols`** (2 nodes): `Hookify Core`, `Session Report`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Security & Permissions`** (2 nodes): `Claude MD Management`, `Skill Creator`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Task & Workflow Management`** (2 nodes): `External Messaging Plugins`, `Skill Development Framework`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `API & Service Clients`** (1 nodes): `Create Condition from dict.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `UI Components & Views`** (1 nodes): `Create Rule from frontmatter dict and message body.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Testing & Validation`** (1 nodes): `__init__.py`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Build & Deployment`** (1 nodes): `__init__.py`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Error Handling & Logging`** (1 nodes): `__init__.py`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Performance Optimization`** (1 nodes): `__init__.py`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Utility Functions & Helpers`** (1 nodes): `__init__.py`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `run_single_query()` connect `Configuration Management` to `External Integrations`?**
  _High betweenness centrality (0.049) - this node is a cross-community bridge._
- **Why does `poll()` connect `External Integrations` to `Configuration Management`?**
  _High betweenness centrality (0.049) - this node is a cross-community bridge._
- **Are the 10 inferred relationships involving `RuleEngine` (e.g. with `Rule` and `Condition`) actually correct?**
  _`RuleEngine` has 10 INFERRED edges - model-reasoned connections that need verification._
- **Are the 10 inferred relationships involving `Condition` (e.g. with `RuleEngine` and `Compile regex pattern with caching.      Args:         pattern: Regex pattern st`) actually correct?**
  _`Condition` has 10 INFERRED edges - model-reasoned connections that need verification._
- **Are the 10 inferred relationships involving `Rule` (e.g. with `RuleEngine` and `Compile regex pattern with caching.      Args:         pattern: Regex pattern st`) actually correct?**
  _`Rule` has 10 INFERRED edges - model-reasoned connections that need verification._
- **Are the 5 inferred relationships involving `run_loop()` (e.g. with `find_project_root()` and `parse_skill_md()`) actually correct?**
  _`run_loop()` has 5 INFERRED edges - model-reasoned connections that need verification._
- **What connects `A single condition for matching.`, `Create Condition from dict.`, `Create Rule from frontmatter dict and message body.` to the rest of the system?**
  _37 weakly-connected nodes found - possible documentation gaps or missing edges._