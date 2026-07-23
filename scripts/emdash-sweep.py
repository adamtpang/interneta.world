import glob

# Site rule: no em dashes in user-facing copy. Sweep the node-search data
# layer, replacing " — " with ", " (matches the v0.1 site-wide sweep).
targets = glob.glob("lib/data/node-search*.ts") + glob.glob(
    "lib/data/node-searches/*.ts"
)
total = 0
for p in targets:
    with open(p, encoding="utf-8") as f:
        c = f.read()
    n = c.count(" — ")
    if n:
        c = c.replace(" — ", ", ")
    # any stragglers without surrounding spaces
    n2 = c.count("—")
    if n2:
        c = c.replace("—", ",")
    if n or n2:
        with open(p, "w", encoding="utf-8") as f:
            f.write(c)
        print(f"fixed {n + n2:2d}  {p}")
        total += n + n2
print(f"TOTAL replaced: {total}")
