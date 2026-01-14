---
---

<link rel="stylesheet" href="https://cdn.datatables.net/1.13.8/css/jquery.dataTables.min.css">
<link rel="stylesheet" href="{{ '/assets/dark.css' | relative_url }}">
<link rel="stylesheet" href="{{ '/assets/table.css' | relative_url }}">

<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
<script src="https://cdn.datatables.net/1.13.8/js/jquery.dataTables.min.js"></script>
<script src="{{ '/assets/dark.js' | relative_url }}"></script>
<script src="{{ '/assets/table.js' | relative_url }}"></script>

<button onclick="toggleTheme()" style="float:right;margin-top:-40px">
🌙 / ☀️
</button>

# EdRegistry

## 📊 Stats
- Lines : **<span id="stats-total">0</span>**
- Filtered Lines : **<span id="stats-filtered">0</span>**

### Top Stats
<ul id="stats-top"></ul>

<table id="datatable" class="display" style="width:100%">
  <thead></thead>
  <tfoot></tfoot>
</table>
